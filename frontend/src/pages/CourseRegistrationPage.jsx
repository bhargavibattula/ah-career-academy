import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import { createRegistration, checkRegistration } from "../services/registrationService";
import { toast } from "react-toastify";
import { 
  CheckCircleIcon, 
  AcademicCapIcon, 
  ClockIcon,
  CheckIcon
} from "@heroicons/react/24/outline";

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
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  // Check if user already registered for this course
  useEffect(() => {
    const checkExisting = async () => {
      if (!user?.email || !id) {
        setCheckingStatus(false);
        return;
      }
      try {
        const res = await checkRegistration(user.email, id);
        if (res.registered) {
          setAlreadyRegistered(true);
        }
      } catch (err) {
        // Ignore — just allow registration
      } finally {
        setCheckingStatus(false);
      }
    };
    checkExisting();
  }, [user, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = await createRegistration({
        ...formData,
        courseId: course.id,
        courseTitle: course.title
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

  if (checkingStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (alreadyRegistered) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-blue-100">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-[#0b1257] mb-4">Already Registered!</h2>
          <p className="text-gray-500 mb-8">
            You have already registered for <span className="font-bold text-gray-900">{course?.title}</span>. Our team will contact you soon.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#0b1257] text-white font-bold py-4 rounded-xl transition-all hover:bg-[#0d1b3e]"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-[#0b1257] mb-4">Registration Successful!</h2>
          <p className="text-gray-500 mb-8">
            Thank you for registering for <span className="font-bold text-gray-900">{course?.title}</span>. Our counselor will contact you within 24 hours.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#0b1257] text-white font-bold py-4 rounded-xl transition-all hover:bg-[#0d1b3e]"
          >
            Go to Dashboard
          </button>
          <p className="text-xs text-gray-400 mt-6 italic">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

          {/* Left Side: Info */}
          <div className="bg-[#0b1257] p-10 text-white flex flex-col justify-between">
            <div>
              <span className="text-orange-500 font-black tracking-widest text-xs uppercase mb-6 inline-block">
                Course Registration
              </span>
              <h1 className="text-3xl font-black mb-4 leading-tight">
                Secure Your Spot in {course?.title}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                Please fill out the form to express your interest. This is a non-binding registration to help our counselors understand your background.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <AcademicCapIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-wider">Course</p>
                    <p className="font-bold">{course?.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <ClockIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-wider">Duration</p>
                    <p className="font-bold">{course?.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-xs text-white/50 mb-4 uppercase font-bold tracking-wider">Contact Admissions</p>
              <p className="text-xl font-bold">9989241515</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10">
            <h2 className="text-2xl font-black text-[#0b1257] mb-8">Personal Details</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                <input
                  required type="text" name="name"
                  value={formData.name} onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <input
                    required type="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Phone Number</label>
                  <input
                    required type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="9989241515"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Current City</label>
                <input
                  required type="text" name="city"
                  value={formData.city} onChange={handleChange}
                  placeholder="Rajahmundry"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Any Questions? (Optional)</label>
                <textarea
                  name="notes" value={formData.notes} onChange={handleChange}
                  rows="3" placeholder="Tell us about your background or requirements..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit" disabled={submitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </form>

            <p className="text-[10px] text-center text-gray-400 mt-6 px-4">
              By clicking "Complete Registration", you agree to be contacted by our admissions team regarding AH Career Academy programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
