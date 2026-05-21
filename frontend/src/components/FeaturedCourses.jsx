import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon as StarSolid,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
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

export default function FeaturedCourses() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-white px-4 py-1.5 text-sm font-bold text-[#2563EB] shadow-sm">
            <ShieldCheckIcon className="h-4 w-4" />
            Featured Programs
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            Choose a program built for career momentum
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-slate-500 sm:text-base">
            Clean learning paths, practical assignments, and support systems designed to help students move from learning to interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl bg-[#0F172A] p-6 text-white shadow-2xl shadow-blue-950/20 lg:row-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(56,189,248,0.35),transparent_32%)]" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />
            <div className="relative flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <AcademicCapIcon className="h-8 w-8 text-[#38BDF8]" />
                </div>
                <span className="rounded-full bg-[#38BDF8] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0F172A]">
                  Flagship
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight">Job Ready Training</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-300">
                Our intensive program for students who want structured technical skills, project confidence, interview readiness, and guided placement support.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  { icon: <ClockIcon className="h-5 w-5" />, label: "Duration", value: "4 Months" },
                  { icon: <BriefcaseIcon className="h-5 w-5" />, label: "Support", value: "Placement" },
                  { icon: <ChartBarIcon className="h-5 w-5" />, label: "Mode", value: "Practical" },
                  { icon: <CheckBadgeIcon className="h-5 w-5" />, label: "Level", value: "Career" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <div className="mb-3 text-[#38BDF8]">{item.icon}</div>
                    <div className="text-xs font-semibold text-slate-400">{item.label}</div>
                    <div className="mt-1 text-sm font-black text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Full Stack", "DSA", "Soft Skills", "Mock Interviews"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to="/programs/job-ready"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#0F172A] transition-all hover:-translate-y-0.5 hover:bg-[#38BDF8]"
              >
                View Flagship Program
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>

          {courses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                  <AcademicCapIcon className="h-7 w-7" />
                </div>
                <div className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-500 ring-1 ring-blue-100">
                  {course.duration}
                </div>
              </div>

              <h3 className="text-xl font-black leading-tight text-[#0F172A]">{course.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-500 line-clamp-2">
                {course.description}
              </p>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-sm font-black text-[#0F172A]">4.8</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                  <UserGroupIcon className="h-4 w-4 text-[#2563EB]" />
                  500+ reviews
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.skills.slice(0, 4).map((skill) => (
                  <span key={skill} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-blue-100 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-500">Training Fee</span>
                  <span className="font-black text-[#0F172A]">{course.fees}</span>
                </div>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-[#1D4ED8]"
              >
                View Course Details
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
