import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { courses } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import { checkRegistration } from "../services/registrationService";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === id);
    if (foundCourse) setCourse(foundCourse);
  }, [id]);

  useEffect(() => {
    const check = async () => {
      if (!user?.email || !id) return;
      try {
        const res = await checkRegistration(user.email, id);
        if (res.registered) setAlreadyRegistered(true);
      } catch (err) {
        // Ignore status check failures and allow the user to continue.
      }
    };
    check();
  }, [user, id]);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-10 text-center shadow-xl shadow-blue-900/10">
          <h2 className="text-2xl font-black text-[#0F172A]">Course not found</h2>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#2563EB] hover:underline">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleRegisterClick = () => {
    if (!user) navigate("/login", { state: { from: `/courses/${id}/register` } });
    else navigate(`/courses/${id}/register`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.24),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-[#38BDF8]">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to courses
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
              <SparklesIcon className="h-4 w-4" />
              {course.category}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-slate-300">
              {course.longDescription}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <ClockIcon className="mb-3 h-6 w-6 text-[#38BDF8]" />
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Duration</div>
                <div className="mt-1 text-lg font-black">{course.duration}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <BanknotesIcon className="mb-3 h-6 w-6 text-[#38BDF8]" />
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Fees</div>
                <div className="mt-1 text-lg font-black">{course.fees}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur">
            <AcademicCapIcon className="h-12 w-12 text-[#38BDF8]" />
            <h2 className="mt-5 text-2xl font-black">Get certified</h2>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
              Join expert-led training with practical projects and career guidance.
            </p>
            {alreadyRegistered ? (
              <div className="mt-6 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-5 py-4 text-center text-sm font-black text-[#38BDF8]">
                Already Registered
              </div>
            ) : (
              <button
                onClick={handleRegisterClick}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#38BDF8] px-5 py-4 text-sm font-black text-[#0F172A] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Register Now
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[1fr_0.38fr]">
        <div className="space-y-8">
          <article className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100">
                <AcademicCapIcon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Course Curriculum</h2>
                <p className="mt-1 text-sm font-medium text-slate-500">Structured modules designed for practical mastery.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {course.curriculum.map((item, index) => (
                <div key={item} className="group flex gap-4 rounded-3xl border border-blue-100 bg-[#F8FAFC] p-4 transition-all hover:border-[#38BDF8]/70 hover:bg-white hover:shadow-lg">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#2563EB] ring-1 ring-blue-100 group-hover:bg-[#2563EB] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-center text-sm font-bold leading-6 text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Skills you&apos;ll learn</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-blue-100 bg-[#F8FAFC] px-4 py-2 text-xs font-black text-[#2563EB]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
            <CheckBadgeIcon className="h-10 w-10 text-[#2563EB]" />
            <h2 className="mt-4 text-xl font-black">Quick Enroll</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-500">Secure your seat before the batch fills up.</p>
            {alreadyRegistered ? (
              <div className="mt-5 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-5 py-3 text-center text-sm font-black text-[#2563EB]">
                You&apos;re Registered
              </div>
            ) : (
              <button
                onClick={handleRegisterClick}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-[#1D4ED8]"
              >
                Register Now
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="rounded-[2rem] bg-[#0F172A] p-6 text-white shadow-2xl shadow-blue-950/20">
            <PhoneIcon className="h-10 w-10 text-[#38BDF8]" />
            <h2 className="mt-4 text-xl font-black">Any Questions?</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-300">
              Our counselors can help you choose the right path for your career.
            </p>
            <a
              href="tel:9989241515"
              className="mt-5 block rounded-2xl bg-white px-5 py-3.5 text-center text-sm font-black text-[#0F172A] transition-all hover:bg-[#38BDF8]"
            >
              Call Us Now
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
