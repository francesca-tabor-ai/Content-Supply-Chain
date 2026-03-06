# API contracts

- **[openapi.yaml](openapi.yaml)** — OpenAPI 3 spec for the CSC Dashboard backend (programmes, assets, briefs, playbooks, health). Update as new routes and request/response shapes are added.
- **[integration-boundaries.md](integration-boundaries.md)** — Boundaries and SLAs for Workfront, Brand Central, and StudioOne: what CSC reads/writes, auth, sync strategy, and commitments (e.g. task status in dashboard within 5 min; asset in BC within 1 hr of CDT approval). Update as integration design completes (Phase 0) and external APIs are confirmed.
