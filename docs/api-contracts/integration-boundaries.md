# Integration boundaries and SLAs

This document defines the boundaries between the CSC Dashboard and external systems (Workfront, Brand Central, StudioOne), and the SLAs/commitments that the dashboard depends on. It should be updated as integration design completes (Phase 0) and when external APIs are confirmed.

---

## 1. Workfront

**Role:** System of record for tasks, projects, milestones, assignments, and status.

**CSC consumes:**

| Capability | Purpose | Notes |
|------------|---------|--------|
| Read projects | F1 Programme Command Centre — list programmes, phase, owner | Map to Programme; filter by toolbox type |
| Read milestones | F1 — Gantt/timeline, due dates, predecessors | Feed RAG and at-risk (F5) |
| Read tasks | F1 drill-down; F4 brief → task linkage | Assignments, status |
| Create/update tasks | F4 — create brief task, attach asset refs, update status | CDT task with files pre-linked |
| Status sync | F7 — task status in dashboard within 5 minutes | PRD commitment |

**Auth:** API key or OAuth per Workfront documentation; service account for server-side sync.

**Sync strategy:** Polling every 5 minutes until webhooks are available. When webhooks exist, use them for task/project updates to meet "within 5 minutes" SLA.

**Boundary:** CSC does not store a full copy of Workfront data. It may cache programme/milestone/task metadata in PostgreSQL for dashboard performance and offline resilience; IDs reference Workfront. Source of truth for task state is Workfront.

**SLA (CSC commitment to users):** Task status changes reflected in the dashboard within **5 minutes** (PRD F7).

---

## 2. Brand Central

**Role:** System of record for assets, playbooks, library, shopping basket, and approvals.

**CSC consumes / triggers:**

| Capability | Purpose | Notes |
|------------|---------|--------|
| Browse / search assets | F3 Asset Hub — filter by market, channel, format, language, approval | Asset availability gated by approval status |
| Shopping basket | F3 — build basket; F4 — submit as brief with asset refs | Basket → brief creation |
| Asset refs and metadata | F4 — attach files to brief (no download; shared environment) | IDs and versions; no file storage in CSC |
| Publish playbook | F2 — one-click publish; version history | Template + asset refs → BC publish |
| Approvals | F4 — market approve/reject; completed assets to library | Inline annotation; rejection → rework task |
| Data Point Tracking | F6 Analytics; Phase 1 Brand Central Data Point Tracking | OQ05: data points and consumers TBD |

**Auth:** SSO/identity aligned with Brand Central (e.g. SAML/OIDC); API/connector auth TBD based on BC product capabilities.

**Sync strategy:** Event/callback from BC if supported, else polling for asset/approval state. Asset availability and approval status drive what markets see and what can be attached to briefs.

**Boundary:** CSC does not store asset files. It stores asset refs (ids, versions) for basket and brief context. Source of truth for assets and library is Brand Central.

**SLA (CSC target):** &lt;**1 hour** from CDT approval to asset available in Brand Central library (PRD metric).

**Open dependency:** OQ01 — ownership of Brand Central–Workfront integration (product vs agencies) must be resolved before Phase 1 build.

---

## 3. StudioOne

**Role:** Creative brief handoff (F7 — creative agency receives brief, submits concepts).

**CSC consumes / triggers:**

| Capability | Purpose | Notes |
|------------|---------|--------|
| Creative brief handoff | F7 — structured brief from dashboard to StudioOne | Connector design in Phase 0 |
| (TBD) Status or callback | Notify when brief received / in progress | Depends on StudioOne API |

**Auth and pattern:** Connector design in Phase 0; details TBD.

**Boundary:** StudioOne is used for creative agency workflow only. Task and programme visibility remain in Workfront; CSC orchestrates handoff and (if supported) status.

**SLA:** To be defined when StudioOne connector design is complete.

---

## 4. Summary table

| System | Source of truth for | CSC reads | CSC writes | SLA / commitment |
|--------|---------------------|-----------|------------|------------------|
| Workfront | Projects, milestones, tasks, status | Projects, milestones, tasks | Create/update tasks (F4 briefs) | Status in dashboard ≤ 5 min |
| Brand Central | Assets, playbooks, basket, library, approvals | Assets, basket, approvals | Publish playbook (F2); trigger approval flow | CDT approval → asset in BC &lt; 1 hr |
| StudioOne | Creative brief handoff | TBD | Send brief (F7) | TBD after Phase 0 design |

---

## 5. CSC API (this app)

The CSC Dashboard API ([openapi.yaml](openapi.yaml)) is the single backend for the UI. It aggregates and orchestrates the above systems; it does not expose Workfront/BC/StudioOne directly. All external boundaries are implemented inside the integration layer (see [../architecture.md](../architecture.md)).

---

*Last updated: March 2026. Update as Phase 0 integration design and external API contracts are confirmed.*
