import cors from "cors";
import express from "express";
import { assetsRouter } from "./routes/assets.js";
import { briefsRouter } from "./routes/briefs.js";
import { healthRouter } from "./routes/health.js";
import { playbooksRouter } from "./routes/playbooks.js";
import { programmesRouter } from "./routes/programmes.js";

const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/api/programmes", programmesRouter);
app.use("/api/assets", assetsRouter);
app.use("/api/briefs", briefsRouter);
app.use("/api/playbooks", playbooksRouter);

app.listen(port, () => {
  console.log(`CSC API listening on http://localhost:${port}`);
});
