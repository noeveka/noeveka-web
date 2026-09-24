import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { handleContactSubmission } from "./api/_lib/contactHandler";
import { handleResourceDownloadSubmission } from "./api/_lib/resourceDownloadHandler";

function localApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: "local-api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) {
          return next();
        }

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

            const pathname = req.url?.split("?")[0];
            if (pathname === "/api/contact") {
              result = await handleContactSubmission(body, env);
            } else if (pathname === "/api/resource-download") {
              result = await handleResourceDownloadSubmission(body, env);
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
