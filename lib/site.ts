export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  return envUrl?.replace(/\/$/, "") || "http://localhost:3000";
}