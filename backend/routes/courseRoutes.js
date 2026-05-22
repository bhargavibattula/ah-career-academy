import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(getCourses)
  .post(authMiddleware, roleMiddleware("admin"), createCourse);

router.route("/:id")
  .get(getCourseById)
  .put(authMiddleware, roleMiddleware("admin"), updateCourse)
  .delete(authMiddleware, roleMiddleware("admin"), deleteCourse);

export default router;
