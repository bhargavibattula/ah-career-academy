import express from "express";
import { 
  createRegistration, 
  getRegistrations, 
  updateRegistrationStatus 
} from "../controllers/registrationController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public: Submit registration
router.post("/", createRegistration);

// Admin: Manage registrations
router.get("/", authMiddleware, roleMiddleware("admin"), getRegistrations);
router.patch("/:id", authMiddleware, roleMiddleware("admin"), updateRegistrationStatus);

export default router;
