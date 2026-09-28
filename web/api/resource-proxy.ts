import type { IncomingMessage, ServerResponse } from "node:http";
import { redeemDownloadToken } from "./_lib/downloadTokenStore.js";

export const config = {
  runtime: "nodejs",
};

/**
 * GET /api/resource-proxy?token=<one-time-token>
 *
 * Redeems a single-use download token issued by /api/resource-download,
 * fetches the PDF from Sanity CDN server-side, and streams the bytes back
 * to the browser as an attachment.
 *
 * The Sanity CDN URL is never transmitted to the browser — only this
 * proxy URL appears in DevTools, and the token is invalidated on first use.
 */
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  // Parse the token from the query string.
  const url = new URL(req.url ?? "/", "http://localhost");
  const token = url.searchParams.get("token");

  if (!token) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing token." }));
    return;
  }

  // Redeem the token — verifies HMAC signature and expiry.
  const pdfUrl = await redeemDownloadToken(token, process.env.DOWNLOAD_TOKEN_SECRET);

  if (!pdfUrl) {
    res.statusCode = 410; // 410 Gone — token expired or already used
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Download link has expired or has already been used." }));
    return;
  }

  // Validate the URL is a Sanity CDN asset (defence-in-depth).
  try {
    const parsed = new URL(pdfUrl);
    const allowedHosts = ["cdn.sanity.io", "assets.sanity.io"];
    if (!allowedHosts.includes(parsed.hostname)) {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Forbidden." }));
      return;
    }
  } catch {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Invalid resource URL." }));
    return;
  }

  // Fetch the PDF server-side and stream it back.
  try {
    const upstream = await fetch(pdfUrl);

    if (!upstream.ok) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Failed to fetch resource from upstream." }));
      return;
    }

    // Derive a clean filename from the URL path.
    const urlPath = new URL(pdfUrl).pathname;
    const rawFilename = urlPath.split("/").pop() ?? "resource.pdf";
    const filename = rawFilename.endsWith(".pdf") ? rawFilename : `${rawFilename}.pdf`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    // Prevent the browser from caching proxy responses.
    res.setHeader("Cache-Control", "no-store");

    // Stream the response body directly to the client.
    const body = upstream.body;
    if (body) {
      const reader = body.getReader();
      const pump = async () => {
        const { done, value } = await reader.read();
        if (done) {
          res.end();
          return;
        }
        res.write(value);
        await pump();
      };
      await pump();
    } else {
      res.end();
    }
  } catch (err) {
    console.error("[Resource Proxy] Upstream fetch error:", err);
    res.statusCode = 502;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to stream resource." }));
  }
}
