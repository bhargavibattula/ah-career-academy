import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * authMiddleware - Verifies JWT from:
 * 1. HTTP-only cookie (preferred, works same-origin)
 * 2. Authorization: Bearer <token> header (fallback for cross-origin dev)
 */
export const authMiddleware = async (req, res, next) => {
  try {
    // Try cookie first
    let token = req.cookies?.token;

    // Fallback: Authorization header
    if (!token) {
      const authHeader = req.headers["authorization"] || req.headers["Authorization"];
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
        console.log("📨 Auth: Found Bearer token in header");
      }
    } else {
      console.log("📨 Auth: Found token in cookie");
    }

    if (!token) {
      console.log("❌ Auth: No token found in cookie or header");
      return res.status(401).json({
        success: false,
        message: "Access denied. Please log in.",
      });
    }

    // Verify token
    let decoded;
    try {
      if (!process.env.JWT_SECRET) {
        console.error("❌ Auth: JWT_SECRET is missing from environment variables!");
      }
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("✅ Auth: Token verified for user:", decoded.userId);
    } catch (err) {
      console.log("❌ Auth: Token verification failed:", err.message);
      res.clearCookie("token");
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Session expired. Please log in again.",
        });
      }
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please log in again.",
      });
    }

    // Fetch user from DB
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      console.log("❌ Auth: User from token not found in DB");
      res.clearCookie("token");
      return res.status(401).json({
        success: false,
        message: "User no longer exists.",
      });
    }

    if (!user.isActive) {
      console.log("❌ Auth: User account is inactive");
      res.clearCookie("token");
      return res.status(403).json({
        success: false,
        message: "Account has been deactivated.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("🔥 Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication error.",
    });
  }
};

/**
 * roleMiddleware - Restricts route to specific roles
 */
export const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated.",
      });
    }

    const normalizedUserRole = req.user.role.toLowerCase();
    const normalizedAllowedRoles = allowedRoles.map(r => r.toLowerCase());

    if (!normalizedAllowedRoles.includes(normalizedUserRole)) {
      console.log(`❌ Auth: Role ${req.user.role} not in allowed:`, allowedRoles);
      return res.status(403).json({
        success: false,
        message: "Access denied. Insufficient permissions.",
      });
    }

    next();
  };
};
