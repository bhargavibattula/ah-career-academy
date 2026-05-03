import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * authMiddleware - Verifies JWT from HTTP-only cookie
 * Attaches user object to req.user on success
 */
export const authMiddleware = async (req, res, next) => {
  try {
    // Read token ONLY from HTTP-only cookie (never Authorization header for web)
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please log in.",
      });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // Clear invalid cookie
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

    // Fetch user from DB (ensures user still exists + is active)
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.clearCookie("token");
      return res.status(401).json({
        success: false,
        message: "User no longer exists.",
      });
    }

    if (!user.isActive) {
      res.clearCookie("token");
      return res.status(403).json({
        success: false,
        message: "Account has been deactivated.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication error.",
    });
  }
};

/**
 * roleMiddleware - Restricts route to specific roles
 * Must be used AFTER authMiddleware
 * Usage: roleMiddleware("admin")  or  roleMiddleware("admin", "moderator")
 */
export const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated.",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Insufficient permissions.",
      });
    }

    next();
  };
};
