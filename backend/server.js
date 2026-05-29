import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import seedAdmin from "./config/seedAdmin.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import kidsRegistrationRoutes from "./routes/kidsRegistrationRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ─── CORS Configuration ───────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://ah-career-academy.vercel.app",
  process.env.FRONTEND_URL,
]
  .filter(Boolean)
  .map((origin) => origin.trim().replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const normalizedOrigin = origin.trim().replace(/\/$/, "");
      const isLocal = normalizedOrigin.includes("localhost") || normalizedOrigin.includes("127.0.0.1");
      if (isLocal || allowedOrigins.includes(normalizedOrigin)) {
        return callback(null, true);
      }
      console.warn(`⚠️ CORS blocked for origin: ${origin}`);
      return callback(null, false); // Return false instead of throwing to prevent Express 500 error
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400, // Preflight cache (24 hours)
  })
);

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cookieParser());

// ─── Debugging Middleware (Dev Only) ──────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    const hasCookie = !!req.cookies.token;
    const hasAuthHeader = !!req.headers.authorization;

    if (hasCookie) console.log("🔑 Auth: Cookie detected");
    if (hasAuthHeader) console.log("📨 Auth: Authorization Header detected");
    if (!hasCookie && !hasAuthHeader) console.log("❌ Auth: No credentials found in request");

    next();
  });
}

// ─── Security Headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/kids-registrations", kidsRegistrationRoutes);
app.use("/api/courses", courseRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "AH Career Academy API is running",
    timestamp: new Date().toISOString(),
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// ─── Startup ──────────────────────────────────────────────────────────────────
const startServer = async () => {
  try {
    // Check for MONGO_URI early
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI is not defined in .env!");
      // Don't exit here, let connectDB handle it or provide a fallback for local if needed
    }

    await connectDB();

    // Ensure JWT_SECRET is stable
    if (!process.env.JWT_SECRET) {
      console.warn("⚠️  JWT_SECRET is missing. Using temporary dev secret.");
      process.env.JWT_SECRET = "ah-career-dev-stable-secret-key-2024";
    }

    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 Origin: ${allowedOrigins.join(", ")}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
