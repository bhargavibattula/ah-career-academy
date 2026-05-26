import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { getCourseById } from "../services/courseService";
import { useAuth } from "../context/AuthContext";
import { checkRegistration, createRegistration } from "../services/registrationService";
import { toast } from "react-toastify";

export default function CourseRegistrationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    city: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      // Local fallback for static Skill Development / 100 Days courses
      if (id === "java-full-stack") {
        setCourse({ id: "java-full-stack", title: "Java Full Stack Developer", duration: "100 Days" });
        setCheckingStatus(false);
        return;
      }
      if (id === "python-full-stack") {
        setCourse({ id: "python-full-stack", title: "Python Full Stack Developer", duration: "100 Days" });
        setCheckingStatus(false);
        return;
      }
      if (id === "data-analytics") {
        setCourse({ id: "data-analytics", title: "Data Analyst Specialist", duration: "100 Days" });
        setCheckingStatus(false);
        return;
      }

      try {
        const data = await getCourseById(id);
        if (data.success && data.data) {
          setCourse(data.data);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Failed to fetch course", err);
        navigate("/");
      }
    };
    fetchCourse();
  }, [id, navigate]);

  useEffect(() => {
    const checkExisting = async () => {
      if (!user?.email || !id) {
        setCheckingStatus(false);
        return;
      }
      try {
        const res = await checkRegistration(user.email, id);
        if (res.registered) setAlreadyRegistered(true);
      } catch (err) {
        // Ignore status check failures and allow registration.
      } finally {
        setCheckingStatus(false);
      }
    };
    checkExisting();
  }, [user, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const cleanedName = formData.name.trim();
    if (!cleanedName) {
      newErrors.name = "Full name is required.";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedName)) {
      newErrors.name = "Name must be letters and spaces only (min 2 characters).";
    }

    const cleanedPhone = formData.phone.trim();
    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid 10-digit WhatsApp number starting with 6-9.";
    }

    const cleanedEmail = formData.email.trim();
    if (!cleanedEmail) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(cleanedEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    const cleanedCity = formData.city.trim();
    if (!cleanedCity) {
      newErrors.city = "City is required.";
    } else if (cleanedCity.length < 2) {
      newErrors.city = "City must be at least 2 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors in the form.");
      setSubmitting(false);
      return;
    }

    setErrors({});

    try {
      const data = await createRegistration({
        ...formData,
        courseId: course.id,
        courseTitle: course.title,
      });

      if (data.success) {
        toast.success("Registration successful!");
        setSuccess(true);
        setTimeout(() => navigate("/dashboard"), 4000);
      } else {
        toast.error(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      toast.error(err.message || "Server connection failed. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-blue-100 bg-[#F8FAFC] px-4 py-3.5 text-sm font-semibold text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#38BDF8] focus:bg-white focus:ring-4 focus:ring-[#38BDF8]/20";

  if (checkingStatus) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-[#2563EB]" />
      </div>
    );
  }

  if (alreadyRegistered || success) {
    const isAlready = alreadyRegistered;
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-4">
        <div className="w-full max-w-md rounded-[2rem] border border-blue-100 bg-white p-10 text-center shadow-2xl shadow-blue-900/10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#38BDF8]/15 text-[#2563EB]">
            {isAlready ? <CheckIcon className="h-10 w-10" /> : <CheckCircleIcon className="h-10 w-10" />}
          </div>
          <h2 className="text-3xl font-black text-[#0F172A]">
            {isAlready ? "Already Registered" : "Registration Successful"}
          </h2>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-500">
            {isAlready ? "You have already registered for " : "Thank you for registering for "}
            <span className="font-black text-[#0F172A]">{course?.title}</span>
            {isAlready ? ". Our team will contact you soon." : ". Our counselor will contact you within 24 hours."}
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 w-full rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-[#1D4ED8]"
          >
            Go to Dashboard
          </button>
          {success && <p className="mt-5 text-xs font-semibold text-slate-400">Redirecting to dashboard...</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12 text-[#0F172A]">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-2xl shadow-blue-900/10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <section className="relative overflow-hidden bg-[#0F172A] p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.28),transparent_34%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
                    <SparklesIcon className="h-4 w-4" />
                    Course Registration
                  </span>
                  <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                    Secure your spot in {course?.title}
                  </h1>
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-300">
                    Fill out this quick form so our counselors can understand your background and guide you with the next step.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                      <AcademicCapIcon className="h-7 w-7 text-[#38BDF8]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Course</p>
                        <p className="font-black">{course?.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                      <ClockIcon className="h-7 w-7 text-[#38BDF8]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Duration</p>
                        <p className="font-black">{course?.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Admissions</p>
                  <p className="mt-2 flex items-center gap-2 text-xl font-black">
                    <PhoneIcon className="h-5 w-5 text-[#38BDF8]" />
                    9989241515
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 sm:p-10">
              <h2 className="text-3xl font-black">Personal Details</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">Your information helps us assign the right counselor.</p>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={`${inputClass} ${errors.name ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`} />
                  {errors.name && <p className="text-xs font-semibold text-red-500 mt-1 pl-1">{errors.name}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={`${inputClass} ${errors.email ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`} />
                    {errors.email && <p className="text-xs font-semibold text-red-500 mt-1 pl-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="9989241515" className={`${inputClass} ${errors.phone ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`} />
                    {errors.phone && <p className="text-xs font-semibold text-red-500 mt-1 pl-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">Current City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Rajahmundry" className={`${inputClass} ${errors.city ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`} />
                  {errors.city && <p className="text-xs font-semibold text-red-500 mt-1 pl-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">Any Questions? Optional</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your background or requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  {submitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRightIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-xs font-medium leading-6 text-slate-400">
                By clicking Complete Registration, you agree to be contacted by our admissions team regarding AH Career Academy programs.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
