import { Router } from "express";

export const assetsRouter = Router();

/** Placeholder: list assets (E3 Asset Hub). Data from Brand Central when implemented. */
assetsRouter.get("/", (_req, res) => {
  res.json({ assets: [] });
});
