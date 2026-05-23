import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  AcademicCapIcon, 
  CurrencyRupeeIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

const programs = [
  {
    title: "Java Full Stack Developer",
    slug: "java-full-stack",
    subtitle: "Enterprise Applications",
    description: "Learn Java, Spring Boot, microservices, databases, React, and cloud deployments in a hands-on environment.",
    skillsCount: "11+ Skills",
    skills: ["OOPs", "Spring Boot", "React", "REST APIs", "SQL", "Docker", "AWS"],
    salary: "₹5 - 10 LPA",
    gradient: "from-blue-600 to-sky-400",
    shadow: "shadow-blue-500/10",
    borderHover: "hover:border-blue-500/50"
  },
  {
    title: "Python Full Stack Developer",
    slug: "python-full-stack",
    subtitle: "Modern Web & SaaS",
    description: "Master Python scripting, Flask web framework, reactive UI with React, databases, and secure authentication.",
    skillsCount: "10+ Skills",
    skills: ["Python", "Flask", "React", "MongoDB", "JWT Auth", "AWS"],
    salary: "₹4 - 10 LPA",
    gradient: "from-cyan-500 to-teal-400",
    shadow: "shadow-cyan-500/10",
    borderHover: "hover:border-cyan-500/50"
  },
  {
    title: "Data Analyst Specialist",
    slug: "data-analytics",
    subtitle: "Insights & Data Science",
    description: "Transform raw data into insights. Master Python, Pandas, EDA, SQL, Power BI, and foundational ML.",
    skillsCount: "12+ Skills",
    skills: ["Pandas", "EDA", "Power BI", "SQL", "TensorFlow", "Stats"],
    salary: "₹6 - 20 LPA",
    gradient: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-500/10",
    borderHover: "hover:border-purple-500/50"
  }
];

export default function JobAccelerationProgram() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-bold text-[#2563EB] shadow-sm mb-4">
            <SparklesIcon className="h-4 w-4" />
            Job Acceleration Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
            100 Days to Become Job-Ready. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Not Just Certified.
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
            A structured, exam-driven, and project-based program that helps you become a job-ready software engineer. 
            You build skills in coding, problem solving, and interview preparation every day.
          </p>
          <button
            onClick={() => navigate("/programs/job-acceleration")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
          >
            Learn more about the program structure
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        {/* 3-Column Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((prog, idx) => (
            <motion.article 
              key={prog.slug}
              whileHover={{ y: -6 }}
              className={`rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl ${prog.shadow} transition-all duration-300 ${prog.borderHover} flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {prog.subtitle}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-100">
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                    100 Days
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                  {prog.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Skills Preview */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Curriculum Highlight ({prog.skillsCount})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.skills.map(skill => (
                      <span 
                        key={skill}
                        className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200/30"
                      >
                        {skill}
                      </span>
                    ))}
                    <span className="text-slate-400 text-[11px] font-bold px-1 py-1">
                      &amp; more
                    </span>
                  </div>
                </div>

                {/* Salary Package */}
                <div className="border-t border-slate-100 pt-5 mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Avg salary package
                  </span>
                  <div className="flex items-center gap-1 text-[#0F172A] font-black text-lg">
                    <CurrencyRupeeIcon className="h-5 w-5 text-emerald-600" />
                    {prog.salary}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigate(`/courses/skill-development/${prog.slug}`)}
                className={`w-full py-4 rounded-2xl bg-gradient-to-r ${prog.gradient} text-white font-black tracking-wide text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md`}
              >
                Explore 100-Days Program
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
