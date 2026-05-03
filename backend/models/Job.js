import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Software & Programming",
      "Cloud & Advanced Technologies",
      "Design & Marketing",
      "Accounts & Office Tools",
      "Additional Skills",
      "Creative & Management"
    ],
  },
  description: String,
  responsibilities: [String],
  requirements: [String],
  skills: [String],
  salary: {
    type: String,
    default: "1.8 LPA – 3 LPA",
  },
  experience: {
    type: String,
    default: "Freshers / Experienced",
  },
  workingHours: {
    type: String,
    default: "9 Hours",
  },
  location: {
    type: String,
    default: "Rajahmundry",
  },
  jobType: {
    type: String,
    enum: ["Full-time", "Internship", "Remote", "Part-time"],
    default: "Full-time",
  },
  whatsappNumber: {
    type: String,
    default: "9989241515",
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

// Pre-save hook to generate slug and ensure uniqueness
JobSchema.pre("save", async function(next) {
  if (!this.isModified("title")) return next();
  
  let baseSlug = this.title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
    
  let slug = baseSlug;
  let counter = 1;
  
  // Check if slug already exists (excluding current doc)
  while (true) {
    const existing = await mongoose.models.Job.findOne({ slug, _id: { $ne: this._id } });
    if (!existing) break;
    slug = `${baseSlug}-${counter++}`;
  }
  
  this.slug = slug;
  next();
});

export default mongoose.model("Job", JobSchema);
