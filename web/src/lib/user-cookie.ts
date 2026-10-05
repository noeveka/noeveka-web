/** Cookie key used to persist the user's identity across sessions. */
const COOKIE_KEY = "noeveka_user";

/** Number of days before the identity cookie expires. */
const COOKIE_EXPIRY_DAYS = 30;

export interface UserCookiePayload {
  name: string;
  email: string;
}

/**
 * Read and parse the identity cookie.
 * Returns null if the cookie is absent or malformed.
 */
export function readUserCookie(): UserCookiePayload | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`));

  if (!match) return null;

  try {
    const raw = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(raw) as Partial<UserCookiePayload>;
    if (parsed.name && parsed.email) {
      return { name: parsed.name, email: parsed.email };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Write the identity cookie with a 30-day expiry.
 * SameSite=Lax; no Secure flag needed for first-party cookie on same origin.
 */
export function writeUserCookie(name: string, email: string): void {
  if (typeof document === "undefined") return;

  const payload = JSON.stringify({ name, email });
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS);

  document.cookie = [
    `${COOKIE_KEY}=${encodeURIComponent(payload)}`,
    `expires=${expires.toUTCString()}`,
    "path=/",
    "SameSite=Lax",
  ].join("; ");
}

/**
 * Delete the identity cookie (sets it with a past expiry date).
 */
export function clearUserCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
}
