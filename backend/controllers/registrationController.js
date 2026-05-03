import Registration from "../models/Registration.js";

// @desc    Register for a course
// @route   POST /api/registrations
// @access  Public (or Private if we want to ensure user is logged in)
export const createRegistration = async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json({
      success: true,
      message: "Registration submitted successfully! We will contact you soon.",
      data: registration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all registrations
// @route   GET /api/registrations
// @access  Private/Admin
export const getRegistrations = async (req, res) => {
  try {
    const { courseId } = req.query;
    const filter = courseId ? { courseId } : {};
    
    const registrations = await Registration.find(filter).sort({ createdAt: -1 });
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
