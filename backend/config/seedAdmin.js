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

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminEmail.toLowerCase() });

    if (existingAdmin) {
      console.log(`ℹ️  Admin already exists: ${adminEmail}`);
      return;
    }

    // Hash password with high salt rounds for admin
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    // Create admin — role is hardcoded here, NOT from any request
    await User.create({
      name: "Quality Thought Admin",
      email: adminEmail.toLowerCase(),
      password: hashedPassword,
      role: "admin", // Only place role: "admin" is ever set
    });

    console.log(`✅ Admin seeded successfully: ${adminEmail}`);
  } catch (error) {
    console.error(`❌ Admin seeding failed: ${error.message}`);
  }
};

export default seedAdmin;
