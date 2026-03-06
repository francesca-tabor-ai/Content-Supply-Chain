# Content Supply Chain Dashboard — Product Roadmap

Single source of truth for product phases, current focus, and high-level timeline. For full feature spec see [CSC_Dashboard_PRD.txt](CSC_Dashboard_PRD.txt). For API and integration contracts see [docs/api-contracts/](docs/api-contracts/).

---

## Current phase

**Phase 0 — Foundation and integration scoping**

Exit criteria for Phase 0:

- Workfront read-only sync working (programmes/milestones in DB or API)
- Brand Central integration path documented
- Open Question 01 (BC–Workfront integration ownership) closed

---

## Phases and timeline

| Phase | Focus | Key outcome | Status |
|-------|--------|-------------|--------|
| **0** | Foundation | Integrations scoped; Workfront sync live; OQ01 closed | **Current** |
| **1** | Core build | F1 Command Centre, F4 Brief, F3 Asset Hub, F2 Playbook — in-platform workflows, zero manual file transfer | Planned |
| **2** | UAT and go-live | Test plan, UAT, Go Live on Brand Central, one toolbox pilot | Planned |
| **3** | Scale | F5 Risk, F6 Analytics, F7 Notifications/StudioOne, multi-programme rollout | Future |

Dates are set from Phase 0 exit. Update "Phase 1 start" when Phase 0 sign-off is confirmed.

- **Phase 0:** Foundation (in progress)
- **Phase 1 start:** TBD (after Phase 0 exit)
- **Phase 2:** UAT and go-live (after Phase 1 core build)
- **Phase 3:** Scale (after first pilot go-live)

---

## Phase 0 — Foundation (current)

**Goal:** Lock integration ownership, data contracts, and technical design so Core Build can start without rework.

- Resolve [BLOCKER] OQ01: Brand Central–Workfront integration ownership
- Workfront: auth (API key/OAuth), read projects/milestones/tasks, sync strategy (e.g. polling 5 min)
- Brand Central: API/connector scope (assets, basket, approvals, publish playbook)
- StudioOne: connector design for creative brief handoff (F7)
- Optional: OpenAPI 3 for CSC API; DB schema and first migrations (briefs, playbook version metadata, audit)

---

## Phase 1 — Core build

**Goal:** Deliver P0 features that remove manual file transfers and give programme visibility.

1. **F1 — Programme Command Centre (P0)** — Gantt/card view with real Workfront data; filters; drill into task timeline. Metric: 100% active programmes visible.
2. **F4 — Transcreation brief and workflow (P0)** — Basket → brief with files → CDT in Workfront → complete → notify market → approval → asset in BC. Metrics: 0 manual file ops; &lt;1 hr to asset in BC; 95% briefs in-platform.
3. **F3 — Asset Hub and shopping basket (P0)** — Browse/filter; build basket; submit CDT request. Metric: market self-serve.
4. **F2 — Digitised playbook builder (P0)** — Create from template; auto-populate; one-click publish to BC; version history. Metric: one-click publish.

Phase 1 exit: F1 live with real data; F3 + F4 end-to-end in-platform; F2 publish to BC working; search filters in Asset Hub.

---

## Phase 2 — UAT and go-live

**Goal:** Validate with users and go live on Brand Central; run first pilot.

- Test plan (E2E: Toolbox Owner, Market User, CDT flows)
- UAT with Toolbox Owners, CDT, Market Users; change management (OQ06)
- Go Live (Brand Central); SSO
- Veev One (or equivalent) pilot; measure baseline → target metrics

---

## Phase 3 — Scale and intelligence

**Goal:** Multi-programme rollout, risk visibility, and analytics.

- **F5** — Risk and milestone tracker (at-risk tasks, RAG, weekly digest, dependency view). Metric: 90% at-risk flagged ≥3 days before slip.
- **F6** — Analytics and reporting (velocity, brief volume, CDT cycle time, market adoption, export CSV/PDF). Requires OQ05 resolved.
- **F7** — Notification and integration layer (Workfront status ≤5 min; in-app + email; StudioOne brief handoff; audit log).
- Rollout: TEREA, Iluma I; channel asset workflows live.

---

## Backlog and sprint breakdown

- **Spec:** PRD remains the feature spec (F1–F7, user stories, data model).
- **Backlog:** Use this roadmap plus your issue tracker for sprint-level breakdown (e.g. F1.01–F1.04, F4.01–F4.05).
- **Dependencies:** Workfront and Brand Central integration are the critical path for Phase 1.

---

*Last updated: March 2026. Internal use — CSC Programme.*
