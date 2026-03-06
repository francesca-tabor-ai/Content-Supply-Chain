# Content Supply Chain Dashboard

**One place to see, manage, and move content from toolbox planning to market activation.**

The Content Supply Chain Dashboard gives everyone in the chain — from Toolbox Owners to Market Users — real-time visibility and in-platform workflows so you can stop chasing status, passing files by hand, and switching between four different tools.

---

## Who it’s for (ICP)

The dashboard is built for the people who own, create, adapt, and activate toolbox content:

| Role | Responsibility | What they get |
|------|----------------|---------------|
| **Toolbox Owner** | Programme scope, budget, and agency coordination | Single source of truth for programme status; digital playbook from template; one-click publish. |
| **Creative Agency** | Concepts, master visuals, channel-ready assets | Structured briefs (no PowerPoint); inline approval; direct upload of approved masters. |
| **Production Team** | Production agency and asset adaptation | Full task visibility; asset versioning in one place. |
| **Content Delivery & Transcreation (CDT)** | Local adaptation and brand/legal compliance | Briefs with files attached; work in a shared environment (no download/upload); auto-notify markets on completion. |
| **Channel Agency** | Channel assets and playbook updates | Self-serve access to masters; playbook updates when assets are approved. |
| **Market User** | Local campaigns, CDT requests, approval of localised content | Browse and basket; submit CDT requests in-platform; track progress; approve and get files in the library. |

---

## Pain points we solve

Today the content supply chain runs across **4+ disconnected systems** with manual handoffs at every stage. That shows up as:

- **Invisible pipeline** — No one has a real-time view of where a toolbox is from briefing → masters → transcreation → go-live.
- **Manual asset logistics** — CDT teams download, rename, transfer, and re-upload files, driving errors, delays, and version drift.
- **Siloed tooling** — Brand Portal, Workfront, StudioOne, and Brand Central don’t talk to each other; people context-switch and lose traceability.
- **Market exclusion** — Markets can’t self-serve assets or see CDT progress; they send PowerPoint briefs and wait with no ETA.
- **Risk blindness** — Programme managers can’t see at-risk milestones across multiple toolbox programmes in one place.

---

## The solution

The CSC Dashboard is a **single pane of glass** that:

1. **Surfaces the full pipeline** — Programme Command Centre with Gantt and cards, milestones, RAG status, and filters (toolbox, phase, owner, at-risk).
2. **Replaces manual playbooks** — Digitised Playbook Builder from a global template; auto-populates from approved masters; one-click publish to Brand Central with version history.
3. **Puts assets and requests in one place** — Asset Hub and Shopping Basket so Market Users and Channel Agencies browse, filter, and submit CDT requests in-platform (no PowerPoint).
4. **Runs transcreation in-platform** — Briefs created with files attached; CDT works in a shared environment; completion triggers market review; approvals land assets in the library.
5. **Surfaces risk** — At-risk milestones and RAG status so programme owners can act before deadlines slip.

The platform sits on **Workfront**, **Brand Central**, and **StudioOne** — it doesn’t replace them; it connects them so workflow and visibility are unified.

**Outcomes we target:** 100% programme visibility in real time; zero manual file transfers per brief for CDT; &lt;1 hour from CDT approval to asset in Brand Central; 95% of briefs raised in-platform; 90% of at-risk tasks flagged before they slip; CDT rework &lt;5%.

---

## For developers

### Overview

- **Platform:** Web (Brand Central)
- **Stack:** Workfront · Brand Central · StudioOne
- **Repo:** Monorepo — `services/api` (integration layer), `apps/dashboard` (frontend)

### Prerequisites

- Node.js 18+
- pnpm or npm (workspaces)
- PostgreSQL (optional; for local API or Docker)

### Environment

Copy `.env.example` to `.env` and set values for your environment. See [docs/architecture.md](docs/architecture.md) for integration details.

### Run locally

**Option A — Docker**

```bash
docker-compose up -d
# API: http://localhost:3001
# Dashboard: http://localhost:5173
```

**Option B — Manual**

```bash
pnpm install
cd services/api && pnpm run dev    # terminal 1
cd apps/dashboard && pnpm run dev  # terminal 2
```

- **Dashboard:** http://localhost:5173  
- **API:** http://localhost:3001 (health: http://localhost:3001/health)

### Project structure

| Path | Purpose |
|------|--------|
| [docs/](docs/) | Architecture, ADRs, API contracts |
| [services/api/](services/api/) | Workfront / Brand Central / StudioOne integration, REST API, sync |
| [apps/dashboard/](apps/dashboard/) | Frontend: Command Centre, Asset Hub, Playbook, Briefs |

### Documentation

- [Product roadmap](ROADMAP.md) — phases, current focus, timeline
- [Architecture & integration patterns](docs/architecture.md)
- [API contracts & integration boundaries](docs/api-contracts/README.md)
- [Product requirements (PRD)](CSC_Dashboard_PRD.txt)

---

*Internal use — CSC Programme.*
