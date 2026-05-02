const featured = [
  {
    icon: "☕",
    title: "Full-Stack Java",
    duration: "5 Months",
    students: "2,500+",
    desc: "Master Java, Spring Boot, Microservices, React, and AWS deployment. Industry-ready skills with real projects.",
    tags: ["Spring Boot", "Microservices", "AWS", "React"],
    rating: 4.8,
    reviews: "500+ students",
    fee: "₹35,000",
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    duration: "4 Months",
    students: "400+",
    desc: "Gain a solid foundation in quantum mechanics, linear algebra, and quantum information theory.",
    tags: ["Algorithms", "Error Correction", "Quantum Hardware", "Cryptography"],
    rating: 4.8,
    reviews: "500+ students",
    fee: "₹1,00,000",
  },
  {
    icon: "🔬",
    title: "AI Testing",
    duration: "5 Months",
    students: "3,000+",
    desc: "learn to evaluate AI models, identify bugs, and maintain the ethical running of AI systems",
    tags: ["AI models", "Bug Detection", "AI systems"],
    rating: 4.9,
    reviews: "2,500+ students",
    fee: "₹40,000",
  },
  {
    icon: "🤖",
    title: "Gen AI Development",
    duration: "4 Months",
    students: "1,200+",
    desc: "Build production-ready Gen AI applications with LLMs, RAG pipelines, and prompt engineering.",
    tags: ["LLMs", "RAG", "Prompt Engineering", "LangChain"],
    rating: 4.9,
    reviews: "800+ students",
    fee: "₹45,000",
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud Engineering",
    duration: "5 Months",
    students: "2,000+",
    desc: "Master CI/CD pipelines, Docker, Kubernetes, and multi-cloud infrastructure deployment.",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    rating: 4.8,
    reviews: "1,200+ students",
    fee: "₹42,000",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= Math.floor(rating) ? "text-yellow-400" : i - 0.5 <= rating ? "text-yellow-300" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedCourses() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-orange-500 text-sm font-semibold border border-orange-200 bg-orange-50 px-4 py-1 rounded-full">
            Featured Programs
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1e1b4b] mb-2">
          Featured Courses
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
          Industry-aligned curriculum designed by experts with 10+ years experience. Start your tech career today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((course) => (
            <div key={course.title} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col">
              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0">
                  {course.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1e1b4b] text-lg leading-tight">{course.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {course.students}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 flex-grow">{course.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {course.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <Stars rating={course.rating} />
                <span className="text-sm font-semibold text-gray-800">{course.rating}</span>
                <span className="text-gray-400 text-xs">({course.reviews})</span>
              </div>

              {/* Fee */}
              <div className="bg-gray-50 rounded-lg px-3 py-2 flex justify-between items-center mb-3">
                <span className="text-gray-600 text-sm">Training Fee</span>
                <span className="font-bold text-gray-900 text-sm">{course.fee}</span>
              </div>

              <button className="w-full bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                View Course Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
