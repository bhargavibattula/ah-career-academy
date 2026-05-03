import express from "express";
import {
  createRegistration,
  checkRegistration,
  getMyRegistrations,
  getRegistrations,
  updateRegistrationStatus,
} from "../controllers/registrationController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes (no auth needed)
router.post("/", createRegistration);
router.get("/check", checkRegistration);
router.get("/my", getMyRegistrations);

// Admin routes (auth + admin role)
router.get("/", authMiddleware, roleMiddleware("admin"), getRegistrations);
router.patch("/:id", authMiddleware, roleMiddleware("admin"), updateRegistrationStatus);

export default router;
