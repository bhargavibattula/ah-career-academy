import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  SparklesIcon,
  EnvelopeIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "motion/react";

import SEO from "../components/SEO";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Must include uppercase, lowercase, and a number.";
    }

    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const getPasswordStrength = () => {
    const p = formData.password;
    if (!p) return null;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/3", text: "text-red-500" };
    if (score === 3) return { label: "Fair", color: "bg-amber-500", width: "w-2/3", text: "text-amber-600" };
    return { label: "Strong", color: "bg-emerald-500", width: "w-full", text: "text-emerald-600" };
  };

  const strength = getPasswordStrength();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      login(data.user);
      toast.success("Account created successfully!");
      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col justify-center relative overflow-hidden">
      <SEO 
        title="Register"
        description="Join AH Career Academy. Create your account to start learning, practice with live codes, schedule mock interview sessions, and apply for direct placement drives."
        keywords="register ah career, sign up academy, coding bootcamp account, start learning code"
      />
      {/* Background decoration matching home page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)] filter blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-16 grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-12 relative z-10">
        
        {/* Left Column - Register Form Card */}
        <motion.main 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-md order-2 lg:order-1"
        >
          <div className="rounded-[2rem] border border-blue-100/80 bg-white p-8 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            <div className="mb-7 text-center">
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A]">
                Create Account
              </h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Join AH Career & launch your tech journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full rounded-2xl border px-4 py-3.5 pl-11 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 bg-slate-50 border-blue-100 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 text-slate-800 ${
                      errors.name ? "border-red-300 focus:border-red-300 focus:ring-red-100" : ""
                    }`}
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs font-semibold text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-2xl border px-4 py-3.5 pl-11 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 bg-slate-50 border-blue-100 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 text-slate-800 ${
                      errors.email ? "border-red-300 focus:border-red-300 focus:ring-red-100" : ""
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs font-semibold text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">Password</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className={`w-full rounded-2xl border px-4 py-3.5 pl-11 pr-12 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 bg-slate-50 border-blue-100 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 text-slate-800 ${
                      errors.password ? "border-red-300 focus:border-red-300 focus:ring-red-100" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2563EB]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
                {formData.password && strength && (
                  <div className="mt-2">
                    <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                    </div>
                    <p className={`mt-1 text-[11px] font-bold ${strength.text}`}>{strength.label} password</p>
                  </div>
                )}
                {errors.password && <p className="mt-1 text-xs font-semibold text-red-500">{errors.password}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">Confirm Password</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className={`w-full rounded-2xl border px-4 py-3.5 pl-11 pr-12 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 bg-slate-50 border-blue-100 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 text-slate-800 ${
                      errors.confirmPassword ? "border-red-300 focus:border-red-300 focus:ring-red-100" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2563EB]"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-xs font-semibold text-red-500">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] hover:from-[#1D4ED8] hover:to-[#0284c7] py-4 text-sm font-black text-white shadow-xl shadow-blue-500/10 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm font-semibold text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-[#2563EB] hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <Link to="/" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#2563EB]">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to home
          </Link>
        </motion.main>

        {/* Right Column - Premium SaaS Value Prop */}
        <motion.section 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden lg:flex flex-col justify-between h-full min-h-[500px] p-10 rounded-[2.5rem] bg-[#0F172A] text-white relative overflow-hidden shadow-2xl shadow-blue-950/20 order-1 lg:order-2"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.18),transparent_30%)]" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#38BDF8]">
              <SparklesIcon className="h-4 w-4" />
              Build Career Confidence
            </span>
            <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
              A cleaner path to real skills.
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-300">
              Create an account to gain full access to course syllabi, verify certificates, practice coding assignments, and communicate with recruiters.
            </p>
          </div>

          {/* Interactive Checklist Cards */}
          <div className="my-8 space-y-3.5 relative z-10">
            {[
              "100% Practical and projects-focused training",
              "Expert guidance from certified tech leaders",
              "Direct placement support & mock interviews",
            ].map((text, idx) => (
              <motion.div 
                key={text} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center border border-[#38BDF8]/20 text-[#38BDF8]">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <span className="text-xs font-black text-slate-300">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Branding info */}
          <div className="flex items-center justify-between text-slate-400 border-t border-white/10 pt-6 relative z-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#38BDF8]">AH Career Academy</span>
            <span className="text-[11px] font-semibold">ISO 9001:2015 Certified</span>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
