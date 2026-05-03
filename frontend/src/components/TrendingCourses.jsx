import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function TrendingCourses() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-3">
          <span className="text-orange-500 text-sm font-semibold border border-orange-200 bg-orange-50 px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1e1b4b] mb-2">
          Trending Courses
        </h2>
        <p className="text-center text-indigo-600 text-base mb-10">
          Master in-demand skills with our specialized programs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-[#2d1b8a] to-[#8b2232] p-5">
                <h3 className="text-white text-2xl font-bold mb-0.5">{course.title}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-1">{course.description}</p>
                <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  High Demand
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="space-y-3 mb-6">
                  {course.curriculum.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-700 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <CheckIcon />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="mb-6 mt-auto">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">Duration</span>
                    <span className="font-bold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 font-medium">Placement</span>
                    <span className="font-bold text-orange-500">100% Assistance</span>
                  </div>
                </div>

                <Link 
                  to={`/course/${course.id}`}
                  className="w-full bg-[#0b1257] hover:bg-[#0d1b3e] text-white text-center font-semibold py-3 rounded-xl transition-all text-sm active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
