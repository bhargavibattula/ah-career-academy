import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourses } from "../services/courseService";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function TrendingCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        if (res.success) {
          setCourses(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch trending courses", err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-11 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#2563EB]">
              <SparklesIcon className="h-4 w-4" />
              Most Popular
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              Trending Courses
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-500 sm:text-base">
              Professional programs built around practical projects, mentor support, and career-focused outcomes.
            </p>
          </div>
          <Link
            to="/programs/job-ready"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-blue-100 bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-[#2563EB] transition-all hover:border-[#38BDF8] hover:bg-white hover:shadow-md"
          >
            Explore job-ready track
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />
              <div className="p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                    <span className="text-lg font-black">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="rounded-full bg-[#38BDF8]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#2563EB]">
                    High Demand
                  </span>
                </div>

                <h3 className="text-xl font-black leading-tight text-[#0F172A]">
                  {course.title}
                </h3>
                <p className="mt-3 min-h-[48px] text-sm font-medium leading-6 text-slate-500 line-clamp-2">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-100 bg-[#F8FAFC] px-3 py-1 text-[11px] font-bold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-6 rounded-2xl bg-[#F8FAFC] p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 font-semibold text-slate-500">
                    <ClockIcon className="h-4 w-4 text-[#2563EB]" />
                    Duration
                  </span>
                  <span className="font-black text-[#0F172A]">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 font-semibold text-slate-500">
                    <UserGroupIcon className="h-4 w-4 text-[#2563EB]" />
                    Support
                  </span>
                  <span className="font-black text-[#2563EB]">Placement Assist</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5">
                <div className="space-y-3">
                  {course.curriculum.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={course.id === "job-ready" ? "/programs/job-ready" : `/courses/${course.id}`}
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F172A] py-3.5 text-sm font-black text-white transition-all hover:bg-[#2563EB]"
                >
                  View Details
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
