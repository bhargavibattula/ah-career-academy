import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourses } from "../services/courseService";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= 4 ? (
          <StarSolid key={i} className="h-4 w-4 text-amber-400" />
        ) : (
          <StarOutline key={i} className="h-4 w-4 text-slate-300" />
        )
      )}
    </div>
  );
}

export default function MiniCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        if (res.success) {
          setCourses(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch mini courses", err);
      }
    };
    fetchCourses();
  }, []);

  const crashCourses = courses.filter((course) => course.category === "45 Days Crash Course");

  if (crashCourses.length === 0) return null;

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-bold text-[#2563EB]">
            Mini Courses
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            Accelerate your learning with 45-day crash courses
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-slate-500 sm:text-base">
            Master specialized topics and highly demanded skills in just 45 days. Perfect for upskilling quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {crashCourses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col rounded-3xl border border-blue-100 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white shadow-sm">
                  <AcademicCapIcon className="h-7 w-7" />
                </div>
                <div className="rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-500 ring-1 ring-blue-100">
                  {course.duration}
                </div>
              </div>

              <h3 className="text-xl font-black leading-tight text-[#0F172A]">{course.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-500 line-clamp-2">
                {course.description}
              </p>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-blue-50">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-sm font-black text-[#0F172A]">4.8</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  to={`/courses/${course.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-[#1D4ED8]"
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
