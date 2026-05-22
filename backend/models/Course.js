import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // acts as slug
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  duration: { type: String, required: true },
  fees: { type: String, required: true },
  curriculum: [{ type: String }],
  skills: [{ type: String }],
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
