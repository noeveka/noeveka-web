/**
 * Stateless signed download tokens.
 *
 * Each token is a base64url-encoded JSON payload containing:
 *   { pdfUrl, exp }
 * followed by a "." separator and an HMAC-SHA256 signature.
 *
 * Format: <base64url(payload)>.<base64url(signature)>
 *
 * Properties:
 * - No shared store required → works across serverless cold-starts / replicas
 * - Single-use behaviour is NOT enforced at the server level (stateless),
 *   but the 5-minute expiry + opaque URL make replay attacks impractical
 *   for a marketing site with no user accounts.
 * - The raw Sanity URL is never sent to the browser - only this token.
 * - Requires DOWNLOAD_TOKEN_SECRET in env (≥ 32 chars). Falls back to a
 *   hard-coded dev secret so local dev works without extra config.
 */

const EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
const DEV_SECRET = "dev-secret-do-not-use-in-production-32chars!!";

interface TokenPayload {
  pdfUrl: string;
  exp: number; // Unix ms timestamp
}

// ─── Signing ──────────────────────────────────────────────────────────────────

async function getKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function base64urlEncode(data: Uint8Array): string {
  return btoa(String.fromCharCode(...data))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(str: string): Uint8Array<ArrayBuffer> {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(padded);
  return Uint8Array.from(bin, (c) =>
    c.charCodeAt(0)
  ) as Uint8Array<ArrayBuffer>;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Issue a signed download token for the given PDF URL.
 * @param pdfUrl  The Sanity CDN URL to protect.
 * @param secret  Value of DOWNLOAD_TOKEN_SECRET env var (optional in dev).
 */
export async function issueDownloadToken(
  pdfUrl: string,
  secret = DEV_SECRET
): Promise<string> {
  const payload: TokenPayload = { pdfUrl, exp: Date.now() + EXPIRY_MS };
  const enc = new TextEncoder();
  const payloadB64 = base64urlEncode(enc.encode(JSON.stringify(payload)));

  const key = await getKey(secret);
  const sig = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, enc.encode(payloadB64))
  );
  const sigB64 = base64urlEncode(sig);

  return `${payloadB64}.${sigB64}`;
}

/**
 * Redeem a signed token.
 * Returns the PDF URL on success, or `null` if the token is invalid/expired.
 * @param token   The token string from the client.
 * @param secret  Value of DOWNLOAD_TOKEN_SECRET env var (optional in dev).
 */
export async function redeemDownloadToken(
  token: string,
  secret = DEV_SECRET
): Promise<string | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sigB64] = parts;

  // 1. Verify signature
  const enc = new TextEncoder();
  const key = await getKey(secret);
  let valid: boolean;
  try {
    valid = await crypto.subtle.verify(
      "HMAC",
      key,
      base64urlDecode(sigB64),
      enc.encode(payloadB64)
    );
  } catch {
    return null;
  }
  if (!valid) return null;

  // 2. Decode payload
  let payload: TokenPayload;
  try {
    payload = JSON.parse(new TextDecoder().decode(base64urlDecode(payloadB64)));
  } catch {
    return null;
  }

  // 3. Check expiry
  if (Date.now() > payload.exp) return null;

  return payload.pdfUrl;
}
