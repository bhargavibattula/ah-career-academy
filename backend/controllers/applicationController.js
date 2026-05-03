import Application from "../models/Application.js";
import Job from "../models/Job.js";

export const applyForJob = async (req, res) => {
  try {
    const { jobId, name, email, phone, resume } = req.body;
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ success: false, message: "Job not found" });

    const application = await Application.create({
      jobId,
      jobTitle: job.title,
      name,
      email,
      phone,
      resume,
    });

    res.status(201).json({ success: true, message: "Application submitted!", data: application });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!application) return res.status(404).json({ success: false, message: "Application not found" });
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
