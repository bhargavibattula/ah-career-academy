import mongoose from "mongoose";

const kidsRegistrationSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    parentName: {
      type: String,
      required: [true, "Parent name is required"],
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
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    course: {
      type: String,
      required: [true, "Course name is required"],
    },
    message: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "enrolled", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const KidsRegistration = mongoose.model("KidsRegistration", kidsRegistrationSchema);

export default KidsRegistration;
