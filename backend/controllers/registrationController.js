import Registration from "../models/Registration.js";

// @desc    Register for a course
// @route   POST /api/registrations
// @access  Public
export const createRegistration = async (req, res) => {
  try {
    const { courseId, courseTitle, name, email, phone, city, notes } = req.body;

    // Validate required fields explicitly
    if (!courseId || !name || !email || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields (courseId, name, email, phone, city) are required.",
      });
    }

    // Check for duplicate registration (same email + same course)
    const existing = await Registration.findOne({ email: email.toLowerCase(), courseId });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "You have already registered for this course.",
      });
    }

    const registration = await Registration.create({
      courseId,
      courseTitle,
      name,
      email,
      phone,
      city,
      notes: notes || "",
    });

    console.log(`✅ New registration saved: ${name} → ${courseTitle} (ID: ${registration._id})`);

    res.status(201).json({
      success: true,
      message: "Registration submitted successfully! We will contact you soon.",
      data: registration,
    });
  } catch (error) {
    console.error("❌ Registration error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Check if user already registered for a course
// @route   GET /api/registrations/check?email=x&courseId=y
// @access  Public
export const checkRegistration = async (req, res) => {
  try {
    const { email, courseId } = req.query;
    if (!email || !courseId) {
      return res.status(400).json({ success: false, registered: false });
    }
    const existing = await Registration.findOne({ email: email.toLowerCase(), courseId });
    res.status(200).json({ success: true, registered: !!existing });
  } catch (error) {
    res.status(500).json({ success: false, registered: false, message: error.message });
  }
};

// @desc    Get registrations by user email
// @route   GET /api/registrations/my?email=x
// @access  Public (user checks their own)
export const getMyRegistrations = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ success: false, data: [] });
    }
    const registrations = await Registration.find({ email: email.toLowerCase() }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: registrations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all registrations (admin)
// @route   GET /api/registrations
// @access  Private/Admin
export const getRegistrations = async (req, res) => {
  try {
    const { courseId } = req.query;
    const filter = courseId ? { courseId } : {};

    const registrations = await Registration.find(filter).sort({ createdAt: -1 });
    console.log(`📋 Admin fetched ${registrations.length} registrations`);
    res.status(200).json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update registration status
// @route   PATCH /api/registrations/:id
// @access  Private/Admin
export const updateRegistrationStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({ success: false, message: "Registration not found" });
    }

    res.status(200).json({
      success: true,
      data: registration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
