import { handleResourceDownloadSubmission, ResourceDownloadRequestBody } from "../../src/server/resourceDownloadHandler";

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_INBOX_EMAIL?: string;
  FROM_EMAIL?: string;
  RESEND_AUDIENCE_ID?: string;
  LOGO_ICON_URL?: string;
  LOGO_TEXT_URL?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = (await context.request.json()) as ResourceDownloadRequestBody;
    const result = await handleResourceDownloadSubmission(body, context.env);

    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
