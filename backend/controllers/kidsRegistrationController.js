import KidsRegistration from "../models/KidsRegistration.js";

// @desc    Register for a kids course
// @route   POST /api/kids-registrations
// @access  Public
export const createKidsRegistration = async (req, res) => {
  try {
    const { studentName, parentName, email, phone, age, course, message } = req.body;

    if (!studentName || !parentName || !email || !phone || !age || !course) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    const registration = await KidsRegistration.create({
      studentName,
      parentName,
      email,
      phone,
      age,
      course,
      message: message || "",
    });

    res.status(201).json({
      success: true,
      message: "Registration successful! Our team will contact you soon.",
      data: registration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all kids registrations (admin)
// @route   GET /api/kids-registrations
// @access  Private/Admin
export const getKidsRegistrations = async (req, res) => {
  try {
    const registrations = await KidsRegistration.find().sort({ createdAt: -1 });
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

// @desc    Update kids registration status
// @route   PATCH /api/kids-registrations/:id
// @access  Private/Admin
export const updateKidsRegistrationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const registration = await KidsRegistration.findByIdAndUpdate(
      req.params.id,
      { status },
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
