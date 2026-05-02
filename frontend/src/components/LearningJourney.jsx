import { useState } from "react";

const tabs = ["Professional Upskilling", "Placement Bootcamps", "Skill To Job", "Corporate Training"];

const tabContent = {
  "Professional Upskilling": {
    badge: "Professional Solutions",
    subtitle: "Professional Upskilling",
    desc: "Advance your career with specialized programs designed for working professionals.",
    stats: [{ value: "15+", label: "Courses" }, { value: "3-6 Months", label: "Duration" }, { value: "100%", label: "Assistance" }],
    included: ["Live Online Classes", "Industry Certifications", "Career Mentorship", "Practical Projects"],
    story: "After completing the Full Stack program at AH Career, I successfully switched to a Software Developer role. — Ravi",
    btnLabel: "Explore Upskilling",
  },
  "Placement Bootcamps": {
    badge: "Placement Solutions",
    subtitle: "Job-Ready Training",
    desc: "Intensive training focused on getting you job-ready with real interview preparation.",
    stats: [{ value: "10+", label: "Programs" }, { value: "3-4 Months", label: "Duration" }, { value: "100%", label: "Assistance" }],
    included: ["Mock Interviews", "Resume Building", "HR Preparation", "Company Tie-Ups"],
    story: "Cracked 3 interviews in one week after the training. The prep was incredible! — Priya",
    btnLabel: "Explore Programs",
  },
  "Skill To Job": {
    badge: "SkillToJob Solutions",
    subtitle: "Skill To Job",
    desc: "Bridge the gap between academia and industry. Get placed in top companies.",
    stats: [{ value: "20+", label: "Courses" }, { value: "2-3 Months", label: "Duration" }, { value: "100%", label: "Assistance" }],
    included: ["Gap Skill Analysis", "Targeted Training", "Job Placement", "Interview Support"],
    story: "Transitioned from a non-tech background to a developer role in 3 months. — Suresh",
    btnLabel: "Explore Skill To Job",
  },
  "Corporate Training": {
    badge: "Enterprise Solutions",
    subtitle: "Corporate Training",
    desc: "For working professionals seeking to upgrade their skills and climb the corporate ladder.",
    stats: [{ value: "15+", label: "Courses" }, { value: "2-4 Months", label: "Duration" }, { value: "100%", label: "Assistance" }],
    included: ["Weekend Batches", "Flexible Timing", "Industry Certifications", "Corporate Workshops"],
    story: "The advanced Excel and SQL training helped our entire team automate reporting. — Vinay",
    btnLabel: "Explore Corporate Training",
  },
};

function CheckCircle() {
  return (
    <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function LearningJourney() {
  const [active, setActive] = useState("Corporate Training");
  const content = tabContent[active];

  return (
    <section className="bg-[#0b1257] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-orange-400 text-sm font-semibold border border-orange-400/30 bg-orange-500/10 px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-2">
          Choose Your <span className="text-orange-500">Learning Journey</span>
        </h2>
        <p className="text-center text-gray-300 text-sm mb-8">
          Master in-demand skills with our specialized programs
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors border ${
                active === tab
                  ? "bg-white text-[#1e1b4b] border-white"
                  : "bg-transparent text-white border-white/30 hover:border-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-900/50 rounded-lg px-3 py-2 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-xs">🏢</div>
              <div>
                <div className="text-xs text-gray-400">{content.badge}</div>
                <div className="text-white font-bold text-sm">{content.subtitle}</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">{content.desc}</p>

            {/* Stats */}
            <div className="flex gap-3 mb-6">
              {content.stats.map((s) => (
                <div key={s.label} className="bg-blue-900/50 rounded-lg px-4 py-3 text-center flex-1">
                  <div className="text-orange-400 font-bold text-lg">{s.value}</div>
                  <div className="text-gray-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors">
              {content.btnLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right */}
          <div className="bg-[#131d5e] rounded-2xl p-6">
            <div className="font-bold text-white text-base mb-4">What's Included:</div>
            <div className="space-y-3 mb-6">
              {content.included.map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-200 text-sm">
                  <CheckCircle />
                  {item}
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="bg-[#1e2d7d] rounded-xl p-4 border border-orange-500/20">
              <div className="text-orange-400 font-bold text-sm mb-2">Success Story</div>
              <p className="text-gray-300 text-sm">{content.story}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
