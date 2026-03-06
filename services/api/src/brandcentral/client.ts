/**
 * Brand Central API client (stub).
 * Depends on BC product capabilities (TBD). Used for assets, playbooks, library, approvals.
 */

const BRAND_CENTRAL_BASE_URL = process.env.BRAND_CENTRAL_BASE_URL;

export interface BrandCentralConfig {
  baseUrl: string;
  apiKey?: string;
}

export function getBrandCentralClient(): BrandCentralConfig {
  if (!BRAND_CENTRAL_BASE_URL) {
    throw new Error("Brand Central integration not configured: BRAND_CENTRAL_BASE_URL required");
  }
  return {
    baseUrl: BRAND_CENTRAL_BASE_URL,
    apiKey: process.env.BRAND_CENTRAL_API_KEY,
  };
}

/** List assets (metadata) — not implemented until BC API contract defined. */
export async function listAssets(_filters: {
  market?: string;
  channel?: string;
  format?: string;
  language?: string;
}): Promise<unknown[]> {
  const _config = getBrandCentralClient();
  // TODO: BC API call
  return [];
}

/** Publish playbook to Brand Central — not implemented. */
export async function publishPlaybook(_programmeId: string, _version: number): Promise<{ success: boolean }> {
  const _config = getBrandCentralClient();
  // TODO: BC API call
  return { success: false };
}
