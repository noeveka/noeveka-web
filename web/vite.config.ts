import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { handleContactSubmission } from "./api/_lib/contactHandler";
import { handleResourceDownloadSubmission } from "./api/_lib/resourceDownloadHandler";
import { handleNewsletterSubscription } from "./api/_lib/newsletterHandler";
import { redeemDownloadToken } from "./api/_lib/downloadTokenStore";

function localApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: "local-api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) {
          return next();
        }

        // ── GET /api/resource-proxy?token=<token> ─────────────────────────────
        const pathname = req.url?.split("?")[0];
        if (pathname === "/api/resource-proxy" && req.method === "GET") {
          const urlObj = new URL(req.url ?? "/", "http://localhost");
          const token = urlObj.searchParams.get("token");

          if (!token) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Missing token." }));
            return;
          }

          const pdfUrl = await redeemDownloadToken(token, env.DOWNLOAD_TOKEN_SECRET);
          if (!pdfUrl) {
            res.statusCode = 410;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Download link has expired or has already been used." }));
            return;
          }

          try {
            const upstream = await fetch(pdfUrl);
            if (!upstream.ok) throw new Error(`Upstream ${upstream.status}`);

            const urlPath = new URL(pdfUrl).pathname;
            const rawFilename = urlPath.split("/").pop() ?? "resource.pdf";
            const filename = rawFilename.endsWith(".pdf") ? rawFilename : `${rawFilename}.pdf`;

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
            res.setHeader("Cache-Control", "no-store");

            const body = upstream.body;
            if (body) {
              const reader = body.getReader();
              const pump = async (): Promise<void> => {
                const { done, value } = await reader.read();
                if (done) { res.end(); return; }
                res.write(value);
                await pump();
              };
              await pump();
            } else {
              res.end();
            }
          } catch (err) {
            res.statusCode = 502;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Failed to stream resource." }));
          }
          return;
        }
        // ─────────────────────────────────────────────────────────────────────

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let bodyRaw = "";
        req.on("data", (chunk) => {
          bodyRaw += chunk;
        });

        req.on("end", async () => {
          try {
            const body = bodyRaw ? JSON.parse(bodyRaw) : {};
            let result: { status: number; body: unknown };

            const postPathname = req.url?.split("?")[0];
            if (postPathname === "/api/contact") {
              result = await handleContactSubmission(body, env);
            } else if (postPathname === "/api/resource-download") {
              result = await handleResourceDownloadSubmission(body, env);
            } else if (postPathname === "/api/newsletter") {
              result = await handleNewsletterSubscription(body, {
                RESEND_API_KEY: env.RESEND_API_KEY,
                RESEND_AUDIENCE_ID: env.RESEND_AUDIENCE_ID,
                FROM_EMAIL: env.FROM_EMAIL,
                LOGO_ICON_URL: env.LOGO_ICON_URL,
                LOGO_TEXT_URL: env.LOGO_TEXT_URL,
              });
            } else {
              res.statusCode = 404;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "API route not found" }));
              return;
            }

            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result.body));
          } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Internal error";
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: message }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), localApiPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  };
});
