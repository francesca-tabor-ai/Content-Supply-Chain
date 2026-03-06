import { Router } from "express";

export const programmesRouter = Router();

/** Placeholder: list programmes (E1 Command Centre). Data from Workfront + CSV when implemented. */
programmesRouter.get("/", (_req, res) => {
  res.json({ programmes: [] });
});
