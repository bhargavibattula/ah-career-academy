import express from "express";
import { applyForJob, getAllApplications, updateApplicationStatus } from "../controllers/applicationController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/apply", applyForJob);
router.get("/admin/all", authMiddleware, roleMiddleware("admin"), getAllApplications);
router.patch("/admin/:id", authMiddleware, roleMiddleware("admin"), updateApplicationStatus);

export default router;
