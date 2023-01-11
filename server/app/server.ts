import "express-async-errors";
import express from "express";
import { initDb } from "./db";
import { PORT } from "./config";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import http from "http";
import logger from "./utils/logger";
import { router as userRouter } from "./user/routes";
import { router as jobDataRouter } from "./jobData/routes";

const app = express();
const server = http.createServer(app);
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("[:date[web]] :method :url :status :response-time ms"));

export async function init() {
  try {
    logger.info("init");
    await initDb();
    initRouter();
    initServer();
  } catch (error) {
    logger.error("Unable to initialize app: ", error);
  }
}

async function initServer() {
  server.listen(PORT, () => {
    logger.info(`Server is running at https://localhost:${PORT}`);
  });
}

async function initRouter() {
  app.use("/health", (req, res) => {
    res.send("OK");
  });
  app.use("/user", userRouter);
  app.use("/job", jobDataRouter);
}

init();

export default app;
