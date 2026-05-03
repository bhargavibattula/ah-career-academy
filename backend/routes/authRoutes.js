import express from "express";
import { register, login, logout, getMe } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (require valid JWT cookie)
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getMe);

export default router;
