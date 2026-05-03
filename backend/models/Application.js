import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Job ID is required"],
    },
    jobTitle: {
      type: String,
      required: [true, "Job Title is required"],
    },
    name: {
      type: String,
      required: [true, "Applicant name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Applicant email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    resume: {
      type: String,
    },
    status: {
      type: String,
      enum: ["applied", "reviewed", "shortlisted", "rejected"],
      default: "applied",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
