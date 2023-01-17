import { Router } from "express";
import User from "./service";

export const router = Router();

router.get("/test", User.testUser);
router.post("/login", User.loginUser);
router.post("/", User.createData);
router.get("/", User.getData);
router.patch("/", User.updateData);
router.delete("/", User.deleteData);
