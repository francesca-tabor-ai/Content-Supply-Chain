/**
 * Workfront API client (stub).
 * Phase 0: implement auth, rate limits, endpoints for projects/tasks/milestones.
 * PRD: task status changes reflected within 5 minutes (webhooks or polling).
 */

const WORKFRONT_BASE_URL = process.env.WORKFRONT_BASE_URL;

export interface WorkfrontConfig {
  baseUrl: string;
  apiKey?: string;
}

export function getWorkfrontClient(): WorkfrontConfig {
  if (!WORKFRONT_BASE_URL) {
    throw new Error("Workfront integration not configured: WORKFRONT_BASE_URL required");
  }
  return {
    baseUrl: WORKFRONT_BASE_URL,
    apiKey: process.env.WORKFRONT_API_KEY,
  };
}

/** Fetch projects — not implemented until Phase 0 complete. */
export async function getProjects(): Promise<unknown[]> {
  const _config = getWorkfrontClient();
  // TODO: REST call to Workfront projects API
  return [];
}

/** Fetch tasks for a project — not implemented until Phase 0 complete. */
export async function getTasksByProject(_projectId: string): Promise<unknown[]> {
  const _config = getWorkfrontClient();
  // TODO: REST call to Workfront tasks API
  return [];
}
