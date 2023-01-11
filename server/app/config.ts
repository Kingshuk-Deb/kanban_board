import { config } from "dotenv";

config();

export const {
  ENV = "development",
  MONGO_URI,
  PORT,
  LOG_DIR = "./logs",
} = process.env;
