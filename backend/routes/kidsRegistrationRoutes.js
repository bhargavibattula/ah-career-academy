import express from "express";
import {
  createKidsRegistration,
  getKidsRegistrations,
  updateKidsRegistrationStatus,
} from "../controllers/kidsRegistrationController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/", createKidsRegistration);

// Admin routes
router.get("/", authMiddleware, roleMiddleware("admin"), getKidsRegistrations);
router.patch("/:id", authMiddleware, roleMiddleware("admin"), updateKidsRegistrationStatus);

export default router;
