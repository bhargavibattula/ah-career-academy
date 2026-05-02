const courses = [
  {
    title: "FullStack Python",
    subtitle: "End-to-End Development",
    badge: "Most Popular",
    badgeColor: "bg-orange-400 text-white",
    gradient: "from-[#2d1b8a] to-[#8b2232]",
    features: [
      "Online / Offline Classes",
      "Job Oriented Curriculum",
      "Mock Interviews & Career Support",
      "Industry Expert Instructors",
    ],
    trainingFee: "₹35,000",
    jobPlacement: "₹45,000 + ₹30,000",
    internship: "₹1,00,000 + ₹30,000",
  },
  {
    title: "Data science",
    subtitle: "Unlock Intelligent Insights",
    badge: "High Demand",
    badgeColor: "bg-orange-400 text-white",
    gradient: "from-[#2d1b8a] to-[#8b2232]",
    features: [
      "Online / Offline Classes",
      "Job Oriented Curriculum",
      "Mock Interviews & Career Support",
      "Multi-Platform Certification",
    ],
    trainingFee: "₹45,000",
    jobPlacement: "₹50,000 + ₹50,000",
    internship: "₹90,000 + ₹30,000",
  },
  {
    title: "Cyber Security",
    subtitle: "Protect Digital Assets",
    badge: "Fast Growing",
    badgeColor: "bg-orange-400 text-white",
    gradient: "from-[#3b1fa3] to-[#922240]",
    features: [
      "Online / Offline Classes",
      "Job Oriented Curriculum",
      "Mock Interviews & Career Support",
      "Hands-on Security Labs",
    ],
    trainingFee: "₹48,000",
    jobPlacement: "₹50,000 + ₹30,000",
    internship: "₹1,00,000 + ₹30,000",
  },
];

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
            <div key={course.title} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${course.gradient} p-5`}>
                <h3 className="text-white text-2xl font-bold mb-0.5">{course.title}</h3>
                <p className="text-white/80 text-sm mb-3">{course.subtitle}</p>
                <span className={`${course.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                  {course.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="space-y-3 mb-6">
                  {course.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-700 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <CheckIcon />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-orange-500 font-semibold text-sm mb-2">Best Price</div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">Training</span>
                    <span className="font-bold text-gray-900">{course.trainingFee}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">Job Placement</span>
                    <span className="font-bold text-orange-500">{course.jobPlacement}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 font-medium">Internship</span>
                    <span className="font-bold text-orange-500">{course.internship}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
