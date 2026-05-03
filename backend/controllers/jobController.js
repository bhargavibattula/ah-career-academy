import Job from "../models/Job.js";

// @desc    Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single job by ID or Slug
export const getJobDetails = async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    let job;
    
    if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
      job = await Job.findById(idOrSlug);
    } else {
      job = await Job.findOne({ slug: idOrSlug });
    }

    if (!job) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a job
export const createJob = async (req, res) => {
  try {
    console.log("Creating job with payload:", req.body);
    
    // Check for duplicate title (to avoid slug conflicts)
    const existingJob = await Job.findOne({ title: req.body.title });
    if (existingJob) {
      // Append a random string to the title if duplicate for slug uniqueness
      // Or just handle it in the pre-save hook
    }

    const job = await Job.create(req.body);
    console.log("Job created successfully:", job._id);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update a job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: "Job not found" });
    res.status(200).json({ success: true, message: "Job deleted" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
