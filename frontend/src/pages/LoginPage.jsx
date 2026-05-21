import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, SparklesIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

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

  const inputClass = (hasError) =>
    `w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 ${
      hasError
        ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-4 focus:ring-red-100"
        : "border-blue-100 bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20"
    }`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto grid min-h-screen max-w-7xl px-4 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        <section className="hidden overflow-hidden rounded-[2rem] bg-[#0F172A] p-10 text-white shadow-2xl shadow-blue-950/20 lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.28),transparent_34%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
                <SparklesIcon className="h-4 w-4" />
                AH Career Portal
              </span>
              <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight">
                Continue your learning journey.
              </h1>
              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-300">
                Access your dashboard, course registrations, and career learning updates in one clean workspace.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["25+", "Courses"],
                  ["24/7", "Support"],
                  ["100%", "Practical"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div className="text-2xl font-black text-[#38BDF8]">{value}</div>
                    <div className="mt-1 text-xs font-semibold text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-900/10 sm:p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-600/20">
                <UserCircleIcon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black">Welcome back</h1>
              <p className="mt-2 text-sm font-medium text-slate-500">Sign in to your AH Career account.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                  <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`${inputClass(errors.password)} pl-11 pr-12`}
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
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-blue-300"
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

            <p className="mt-6 text-center text-sm font-medium text-slate-500">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-black text-[#2563EB] hover:underline">
                Create one
              </Link>
            </p>
          </div>

          <Link to="/" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#2563EB]">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to home
          </Link>
        </main>
      </div>
    </div>
  );
}
