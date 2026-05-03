import bcrypt from "bcryptjs";
import User from "../models/User.js";

const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.warn("⚠️  ADMIN_EMAIL or ADMIN_PASSWORD not set in .env — skipping admin seed.");
      return;
    }

    const trimmedEmail = adminEmail.toLowerCase();
    
    // Hash the password from .env
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: trimmedEmail });

    if (existingAdmin) {
      // ALWAYS update password and role to match .env
      existingAdmin.password = hashedPassword;
      existingAdmin.role = "admin";
      existingAdmin.name = "AH Career Admin";
      await existingAdmin.save({ validateBeforeSave: false });
      console.log(`ℹ️  Admin credentials SYNCED with .env for: ${trimmedEmail}`);
    } else {
      // Create new admin
      await User.create({
        name: "AH Career Admin",
        email: trimmedEmail,
        password: hashedPassword,
        role: "admin",
      });
      console.log(`✅ Admin seeded successfully: ${trimmedEmail}`);
    }
  } catch (error) {
    console.error(`❌ Admin seeding failed: ${error.message}`);
  }
};

export default seedAdmin;
