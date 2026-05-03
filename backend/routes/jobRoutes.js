import express from "express";
import { getJobs, getJobDetails, createJob, updateJob, deleteJob } from "../controllers/jobController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getJobs);
router.get("/:idOrSlug", getJobDetails);

// Admin only routes
router.post("/", authMiddleware, roleMiddleware("admin"), createJob);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateJob);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteJob);

export default router;
