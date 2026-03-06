/**
 * Data model types per PRD §7.
 * Mirrors services/api/src/models/types.ts for frontend use.
 */

export interface Programme {
  id: string
  name: string
  startDate: string
  endDate: string
  phase: string
  ragStatus: 'red' | 'amber' | 'green'
  owner: string
  toolboxType: string
}

export interface Milestone {
  id: string
  programmeId: string
  name: string
  dueDate: string
  predecessors: string[]
  completedDate: string | null
  atRisk: boolean
}

export interface Asset {
  id: string
  programmeId: string
  name: string
  type: string
  format: string
  market: string
  language: string
  approvalStatus: string
  version: number
}

export interface Brief {
  id: string
  marketUserId: string
  assets: string[]
  market: string
  language: string
  cdtOwnerId: string | null
  status: string
  submittedAt: string
}

export interface PlaybookVersion {
  id: string
  programmeId: string
  version: number
  publishedAt: string
  sections: unknown[]
  assetRefs: string[]
}

export interface User {
  id: string
  name: string
  role: string
  market: string
  organisation: string
  workfrontId: string | null
}
