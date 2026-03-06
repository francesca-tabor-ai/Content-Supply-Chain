import { Router } from "express";

export const playbooksRouter = Router();

/** Placeholder: list playbook versions (E2 Playbook builder). */
playbooksRouter.get("/", (_req, res) => {
  res.json({ playbooks: [] });
});
