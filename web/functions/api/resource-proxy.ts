import { redeemDownloadToken } from "../../api/_lib/downloadTokenStore";

interface Env {
  DOWNLOAD_TOKEN_SECRET?: string;
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  const url = new URL(context.request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing token." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Redeem token - verifies HMAC signature and expiry
  const pdfUrl = await redeemDownloadToken(
    token,
    context.env.DOWNLOAD_TOKEN_SECRET
  );

  if (!pdfUrl) {
    return new Response(
      JSON.stringify({
        error: "Download link has expired or has already been used.",
      }),
      {
        status: 410,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate the URL is a Sanity CDN asset
  try {
    const parsed = new URL(pdfUrl);
    const allowedHosts = ["cdn.sanity.io", "assets.sanity.io"];
    if (!allowedHosts.includes(parsed.hostname)) {
      return new Response(JSON.stringify({ error: "Forbidden." }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch {
    return new Response(JSON.stringify({ error: "Invalid resource URL." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fetch the PDF server-side and stream it back directly
  try {
    const upstream = await fetch(pdfUrl);

    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch resource from upstream." }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const urlPath = new URL(pdfUrl).pathname;
    const rawFilename = urlPath.split("/").pop() ?? "resource.pdf";
    const filename = rawFilename.endsWith(".pdf")
      ? rawFilename
      : `${rawFilename}.pdf`;

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[Resource Proxy] Upstream fetch error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to stream resource." }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
