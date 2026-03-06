/**
 * API client for CSC backend (services/api).
 * In dev, Vite proxies /api and /health to localhost:3001.
 */

const getBaseUrl = () => {
  if (import.meta.env.DEV) return ''; // proxy
  return import.meta.env.VITE_API_BASE_URL ?? ''
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const base = getBaseUrl()
  const res = await fetch(`${base}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.json() as Promise<T>
}

export const api = {
  health: () => request<{ status: string; version: string }>('/health'),
  programmes: {
    list: () => request<{ programmes: unknown[] }>('/api/programmes'),
  },
  assets: {
    list: () => request<{ assets: unknown[] }>('/api/assets'),
  },
  briefs: {
    list: () => request<{ briefs: unknown[] }>('/api/briefs'),
  },
  playbooks: {
    list: () => request<{ playbooks: unknown[] }>('/api/playbooks'),
  },
}
