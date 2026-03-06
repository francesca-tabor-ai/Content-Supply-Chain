import { Router } from "express";

export const briefsRouter = Router();

/** Placeholder: list briefs (E4 Transcreation workflow). */
briefsRouter.get("/", (_req, res) => {
  res.json({ briefs: [] });
});
