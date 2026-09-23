import type { IncomingMessage, ServerResponse } from "node:http";
import { handleContactSubmission, type ContactRequestBody } from "../src/server/contactHandler.ts";

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

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactRequestBody;

  const result = await handleContactSubmission(body, {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_INBOX_EMAIL: process.env.CONTACT_INBOX_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
    LOGO_ICON_URL: process.env.LOGO_ICON_URL,
    LOGO_TEXT_URL: process.env.LOGO_TEXT_URL,
  });

  return res.status(result.status).json(result.body);
}
