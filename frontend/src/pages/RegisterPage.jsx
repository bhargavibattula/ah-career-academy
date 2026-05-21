import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  SparklesIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

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

    if (score <= 2) return { label: "Weak", color: "bg-red-400", width: "w-1/3", text: "text-red-500" };
    if (score === 3) return { label: "Fair", color: "bg-amber-400", width: "w-2/3", text: "text-amber-600" };
    return { label: "Strong", color: "bg-[#2563EB]", width: "w-full", text: "text-[#2563EB]" };
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

  const inputClass = (hasError) =>
    `w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 ${
      hasError
        ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-4 focus:ring-red-100"
        : "border-blue-100 bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20"
    }`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto grid min-h-screen max-w-7xl px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <main className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-900/10 sm:p-8">
            <div className="mb-7 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-600/20">
                <UserPlusIcon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black">Create account</h1>
              <p className="mt-2 text-sm font-medium text-slate-500">Join AH Career and start your learning journey.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass(errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass(errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className={`${inputClass(errors.password)} pr-12`}
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
                {formData.password && strength && (
                  <div className="mt-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-blue-50">
                      <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                    </div>
                    <p className={`mt-1 text-xs font-bold ${strength.text}`}>{strength.label} password</p>
                  </div>
                )}
                {errors.password && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.password}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className={`${inputClass(errors.confirmPassword)} pr-12 ${
                      formData.confirmPassword && formData.password === formData.confirmPassword ? "border-[#38BDF8]" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-[#2563EB]"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-blue-300"
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

            <p className="mt-6 text-center text-sm font-medium text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-black text-[#2563EB] hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <Link to="/" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#2563EB]">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to home
          </Link>
        </main>

        <section className="hidden overflow-hidden rounded-[2rem] bg-[#0F172A] p-10 text-white shadow-2xl shadow-blue-950/20 lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(56,189,248,0.28),transparent_34%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
                <SparklesIcon className="h-4 w-4" />
                Start learning today
              </span>
              <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight">
                A cleaner path from skills to career confidence.
              </h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-300">
                Create your account to manage registrations, access your dashboard, and stay connected with AH Career.
              </p>
              <div className="mt-10 space-y-3">
                {["Practical learning", "Mentor guidance", "Career-focused support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold ring-1 ring-white/10">
                    <CheckCircleIcon className="h-5 w-5 text-[#38BDF8]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
