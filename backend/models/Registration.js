import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: [true, "Course ID is required"],
    },
    courseTitle: {
      type: String,
      required: [true, "Course Title is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "enrolled", "cancelled"],
      default: "pending",
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
