/**
 * StudioOne connector (stub).
 * Phase 0: design contract for creative agency brief handoff (inbound/outbound).
 * F7: integration with StudioOne for creative agency brief handoff.
 */

const STUDIO_ONE_BASE_URL = process.env.STUDIO_ONE_BASE_URL;

export interface StudioOneConfig {
  baseUrl: string;
  apiKey?: string;
}

export function getStudioOneClient(): StudioOneConfig | null {
  if (!STUDIO_ONE_BASE_URL) return null;
  return {
    baseUrl: STUDIO_ONE_BASE_URL,
    apiKey: process.env.STUDIO_ONE_API_KEY,
  };
}

/** Send brief to StudioOne — not implemented until Phase 0 design complete. */
export async function sendBrief(_brief: {
  title: string;
  assets: string[];
  recipientId?: string;
}): Promise<{ success: boolean; externalId?: string }> {
  const client = getStudioOneClient();
  if (!client) {
    return { success: false };
  }
  // TODO: StudioOne API call per connector design
  return { success: false };
}
