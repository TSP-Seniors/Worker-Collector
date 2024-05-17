import { Router } from "express";
import { homePage, workerPage } from "../controllers/worker.controller.js";

const router = Router();

router.get("/", homePage);
router.get("/workers", workerPage);

export default router;
