# Content Supply Chain Dashboard

A unified dashboard that consolidates toolbox planning, asset management, transcreation workflows, and market approvals into a single pane of glass — integrating with Workfront, Brand Central, and StudioOne.

## Overview

- **Platform**: Web (Brand Central)
- **Tech stack**: Workfront · Brand Central · StudioOne
- **Repo**: Monorepo with `services/api` (backend integration layer) and `apps/dashboard` (frontend)

## Getting started

### Prerequisites

- Node.js 18+
- pnpm or npm (workspaces)
- PostgreSQL (for local API; optional via Docker)

### Environment

Copy `.env.example` to `.env` and fill in values for your environment. See [docs/architecture.md](docs/architecture.md) for integration details.

### Run locally

**Option A — With Docker**

```bash
docker-compose up -d
# API: http://localhost:3001
# Dashboard: http://localhost:5173
```

**Option B — Manual**

```bash
# Install dependencies (from repo root)
pnpm install

# Run API
cd services/api && pnpm run dev

# Run dashboard (separate terminal)
cd apps/dashboard && pnpm run dev
```

- **Dashboard**: http://localhost:5173  
- **API**: http://localhost:3001 (health: http://localhost:3001/health)

### Project structure

| Path | Purpose |
|------|--------|
| [docs/](docs/) | Architecture, ADRs, API contracts |
| [services/api/](services/api/) | Backend: Workfront/BC/StudioOne integration, REST API, sync |
| [apps/dashboard/](apps/dashboard/) | Frontend: Command Centre, Asset Hub, Playbook, Briefs |

## Documentation

- [Architecture & integration patterns](docs/architecture.md)
- [Product requirements](CSC_Dashboard_PRD.txt)

## License

Internal use — CSC Programme.
