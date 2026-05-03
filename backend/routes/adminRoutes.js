import express from "express";
import {
  getAllUsers,
  deleteUser,
  toggleUserStatus,
  getStats,
} from "../controllers/adminController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// All admin routes require: valid JWT + admin role
// Middleware chain: authMiddleware → roleMiddleware("admin") → controller
router.use(authMiddleware);
router.use(roleMiddleware("admin"));

router.get("/users", getAllUsers);
router.get("/stats", getStats);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id/toggle", toggleUserStatus);

export default router;
