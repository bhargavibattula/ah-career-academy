import User from "../models/User.js";

// ─── GET /api/admin/users ─────────────────────────────────────────────────────
export const getAllUsers = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    // Search
    const search = req.query.search || "";
    const searchFilter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      User.find(searchFilter)
        .select("-password -__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(searchFilter),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        users,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
          limit,
        },
      },
    });
  } catch (error) {
    console.error("getAllUsers error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users.",
    });
  }
};

// ─── DELETE /api/admin/user/:id ───────────────────────────────────────────────
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent admin from deleting themselves
    if (id === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own account.",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Prevent deleting other admins
    if (user.role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin accounts cannot be deleted through this endpoint.",
      });
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: `User "${user.name}" deleted successfully.`,
    });
  } catch (error) {
    console.error("deleteUser error:", error);

    // Handle invalid ObjectId
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete user.",
    });
  }
};

// ─── PATCH /api/admin/user/:id/toggle ─────────────────────────────────────────
// Toggle user active/inactive status
export const toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (id === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot change your own status.",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin status cannot be changed.",
      });
    }

    user.isActive = !user.isActive;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json({
      success: true,
      message: `User "${user.name}" has been ${user.isActive ? "activated" : "deactivated"}.`,
      data: { isActive: user.isActive },
    });
  } catch (error) {
    console.error("toggleUserStatus error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update user status.",
    });
  }
};

// ─── GET /api/admin/stats ─────────────────────────────────────────────────────
export const getStats = async (req, res) => {
  try {
    const [totalUsers, activeUsers, newThisMonth] = await Promise.all([
      User.countDocuments({ role: "user" }),
      User.countDocuments({ role: "user", isActive: true }),
      User.countDocuments({
        role: "user",
        createdAt: {
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: { totalUsers, activeUsers, newThisMonth },
    });
  } catch (error) {
    console.error("getStats error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch stats.",
    });
  }
};
