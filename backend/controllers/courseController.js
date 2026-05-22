import Course from "../models/Course.js";

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Admin
export const createCourse = async (req, res) => {
  try {
    const { title, category, description, longDescription, duration, fees, curriculum, skills } = req.body;
    
    // Generate id (slug) from title
    let id = req.body.id;
    if (!id) {
      id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    }

    // Check if course already exists
    const existingCourse = await Course.findOne({ id });
    if (existingCourse) {
      return res.status(400).json({ success: false, message: "Course with this slug/id already exists." });
    }

    const course = new Course({
      id,
      title,
      category,
      description,
      longDescription,
      duration,
      fees,
      curriculum: Array.isArray(curriculum) ? curriculum : [],
      skills: Array.isArray(skills) ? skills : []
    });

    const createdCourse = await course.save();
    res.status(201).json({ success: true, data: createdCourse });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single course by id (slug)
// @route   GET /api/courses/:id
// @access  Public
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });
    if (course) {
      res.json({ success: true, data: course });
    } else {
      res.status(404).json({ success: false, message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Admin
export const updateCourse = async (req, res) => {
  try {
    const { title, category, description, longDescription, duration, fees, curriculum, skills } = req.body;

    const course = await Course.findOne({ id: req.params.id });

    if (course) {
      course.title = title || course.title;
      course.category = category || course.category;
      course.description = description || course.description;
      course.longDescription = longDescription || course.longDescription;
      course.duration = duration || course.duration;
      course.fees = fees || course.fees;
      course.curriculum = Array.isArray(curriculum) ? curriculum : course.curriculum;
      course.skills = Array.isArray(skills) ? skills : course.skills;

      const updatedCourse = await course.save();
      res.json({ success: true, data: updatedCourse });
    } else {
      res.status(404).json({ success: false, message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });

    if (course) {
      await Course.deleteOne({ id: req.params.id });
      res.json({ success: true, message: "Course removed" });
    } else {
      res.status(404).json({ success: false, message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
