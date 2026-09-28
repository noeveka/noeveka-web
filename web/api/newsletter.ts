import type { IncomingMessage, ServerResponse } from "node:http";
import { handleNewsletterSubscription, type NewsletterRequestBody } from "./_lib/newsletterHandler.js";

export const config = {
  runtime: "nodejs",
};

interface ApiRequest extends IncomingMessage {
  body?: unknown;
}

interface ApiResponse extends ServerResponse {
  status: (statusCode: number) => ApiResponse;
  json: (data: unknown) => void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as NewsletterRequestBody;

  const result = await handleNewsletterSubscription(body, {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
    FROM_EMAIL: process.env.FROM_EMAIL,
    LOGO_ICON_URL: process.env.LOGO_ICON_URL,
    LOGO_TEXT_URL: process.env.LOGO_TEXT_URL,
  });

  return res.status(result.status).json(result.body);
}
