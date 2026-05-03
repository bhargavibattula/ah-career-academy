import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import { checkRegistration } from "../services/registrationService";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [id]);

  // Check if user already registered
  useEffect(() => {
    const check = async () => {
      if (!user?.email || !id) return;
      try {
        const res = await checkRegistration(user.email, id);
        if (res.registered) setAlreadyRegistered(true);
      } catch (err) { /* ignore */ }
    };
    check();
  }, [user, id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleRegisterClick = () => {
    if (!user) {
      navigate("/login", { state: { from: `/course/${id}/register` } });
    } else {
      navigate(`/course/${id}/register`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-[#0b1257] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {course.longDescription}
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⏱</span>
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <span>Fees: {course.fees}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 w-full md:w-80">
              <h3 className="text-xl font-bold mb-4">Get Certified</h3>
              <p className="text-sm text-white/70 mb-6">
                Join our expert-led training and kickstart your career today.
              </p>
              {alreadyRegistered ? (
                <div className="w-full bg-green-500/20 border border-green-400/30 text-green-300 font-bold py-4 rounded-xl text-center text-sm">
                  ✓ Already Registered
                </div>
              ) : (
                <button
                  onClick={handleRegisterClick}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0b1257] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">📚</span>
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-orange-500">0{index + 1}</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#0b1257] mb-6">Skills You'll Learn</h2>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-lg border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#0b1257] mb-4">Quick Enroll</h2>
              <p className="text-gray-500 text-sm mb-6">Secure your seat before the batch fills up.</p>
              {alreadyRegistered ? (
                <div className="w-full bg-green-50 border border-green-200 text-green-700 font-bold py-3 rounded-xl text-center text-sm">
                  ✓ You're Registered
                </div>
              ) : (
                <button
                  onClick={handleRegisterClick}
                  className="w-full bg-[#0b1257] hover:bg-[#0d1b3e] text-white font-bold py-3 rounded-xl transition-all active:scale-95"
                >
                  Register Now →
                </button>
              )}
            </div>

            <div className="bg-orange-500 rounded-3xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Any Questions?</h2>
              <p className="text-white/80 text-sm mb-6">
                Our counselors are here to help you choose the right path for your career.
              </p>
              <a
                href="tel:9989241515"
                className="block w-full bg-white text-orange-500 text-center font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
