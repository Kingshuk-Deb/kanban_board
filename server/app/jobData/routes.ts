import { Router } from "express";
import JobData from "./service";

export const router = Router();

router.get("/", JobData.testJob);
router.post("/", JobData.createData);
router.get("/", JobData.getData);
router.patch("/", JobData.updateData);
router.delete("/", JobData.deleteData);

