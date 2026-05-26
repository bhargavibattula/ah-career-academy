import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  SparklesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "motion/react";

import SEO from "../components/SEO";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || null;

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser(formData);
      login(data.user, data.token);

      if (data.user.role === "admin") {
        toast.success("Welcome back, Admin!");
        navigate(from || "/admin-dashboard", { replace: true });
      } else {
        toast.success("Login successful!");
        navigate(from || "/dashboard", { replace: true });
      }
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col justify-center relative overflow-hidden">
      <SEO 
        title="Login"
        description="Sign in to your AH Career Academy dashboard to track your classes, view program milestone schedules, submit coding tasks, and access placements."
        keywords="login ah career, student portal, coding dashboard, sign in academy"
      />
      {/* Background decoration matching home page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)] filter blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 relative z-10">
        
        {/* Left Column - Slate Card like the flagship sections */}
        <motion.section 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-col justify-between h-full min-h-[500px] p-10 rounded-[2.5rem] bg-[#0F172A] text-white relative overflow-hidden shadow-2xl shadow-blue-950/20"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.18),transparent_30%)]" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#38BDF8]">
              <SparklesIcon className="h-4 w-4" />
              AH Career Portal
            </span>
            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight">
              Continue your learning journey.
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-300">
              Access your dashboard, course registrations, and career learning updates in one clean workspace.
            </p>
          </div>

          {/* SaaS interactive block */}
          <div className="my-8 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Workspace</span>
            </div>
            
            <div className="space-y-3.5">
              <div className="flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8]">
                    <SparklesIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">Full Stack Track</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Next milestone: Mock Interview</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-[#38BDF8]">82%</div>
                  <div className="w-12 h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#38BDF8] h-full rounded-full w-[82%]" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <SparklesIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">Resume Verification</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Verified by instructor</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-black text-emerald-400 border border-emerald-500/20">
                  Approved
                </span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 relative z-10">
            {[
              ["25+", "Courses"],
              ["24/7", "Support"],
              ["100%", "Practical"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-xl font-black text-[#38BDF8]">{value}</div>
                <div className="mt-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Right Column - White Card Form */}
        <motion.main 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="rounded-[2rem] border border-blue-100/80 bg-white p-8 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A]">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Sign in to continue your learning.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
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
                {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`w-full rounded-2xl border px-4 py-3.5 pl-11 pr-12 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 bg-slate-50 border-blue-100 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 text-slate-800 ${
                      errors.password ? "border-red-300 focus:border-red-300 focus:ring-red-100" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-[#2563EB]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] hover:from-[#1D4ED8] hover:to-[#0284c7] py-4 text-sm font-black text-white shadow-xl shadow-blue-500/10 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm font-semibold text-slate-500">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-bold text-[#2563EB] hover:underline">
                Create one
              </Link>
            </p>
          </div>

          <Link to="/" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#2563EB]">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to home
          </Link>
        </motion.main>
      </div>
    </div>
  );
}
