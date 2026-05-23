import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ScrollVelocity from "../components/ScrollVelocity";
import { 
  AcademicCapIcon, 
  ArrowRightIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  ClockIcon, 
  CpuChipIcon, 
  CurrencyRupeeIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

const streams = [
  {
    title: "Java Full Stack Developer",
    slug: "java-full-stack",
    subtitle: "Enterprise Applications",
    description: "Build robust enterprise services. Focuses on OOPs, Spring Boot, React, SQL, and Microservices.",
    salary: "₹5 - 10 LPA",
    gradient: "from-blue-600 to-sky-500",
    glow: "rgba(37, 99, 235, 0.04)",
    borderClass: "border-[#38BDF8]/35 hover:border-blue-500"
  },
  {
    title: "Python Full Stack Developer",
    slug: "python-full-stack",
    subtitle: "Modern Web & SaaS",
    description: "Rapid web development. Focuses on Python, Flask, React, MongoDB, AWS, and secure JWT Auth.",
    salary: "₹4 - 10 LPA",
    gradient: "from-blue-600 to-sky-500",
    glow: "rgba(37, 99, 235, 0.04)",
    borderClass: "border-[#38BDF8]/35 hover:border-blue-500"
  },
  {
    title: "Data Analyst Specialist",
    slug: "data-analytics",
    subtitle: "Insights & Analytics",
    description: "Harness data-driven intelligence. Focuses on NumPy, Pandas, EDA, SQL, Power BI, and ML.",
    salary: "₹6 - 20 LPA",
    gradient: "from-blue-600 to-sky-500",
    glow: "rgba(37, 99, 235, 0.04)",
    borderClass: "border-[#38BDF8]/35 hover:border-blue-500"
  }
];

const programMilestones = [
  { dayRange: "Day 1 - 30", title: "Foundation & Core Logic", desc: "Master basic language syntax, OOPs, data structures, algorithms, and logical problem solving." },
  { dayRange: "Day 31 - 60", title: "Advanced Frameworks & Databases", desc: "Build APIs using Spring Boot, Flask or SQL queries. Integrate database triggers and storage architectures." },
  { dayRange: "Day 61 - 80", title: "Real-World Industry Projects", desc: "Work in active lab environments. Deploy multi-tier apps with frontend UI (React) and docker containers." },
  { dayRange: "Day 81 - 100", title: "Placement Bootcamp & Mock Drives", desc: "Resume editing, behavioral rounds, coding assessments, and direct interviews with top-tier hiring partners." }
];

export default function JobAccelerationProgramPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Glowing Gradient Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(37,99,235,0.08),transparent_36%,rgba(56,189,248,0.12)_72%,transparent)]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto z-10 text-center lg:text-left grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-white/95 px-4 py-2 text-sm font-bold text-[#2563EB] shadow-sm mb-6"
            >
              <SparklesIcon className="h-4 w-4" />
              Job Acceleration Program
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#0F172A] mb-6"
            >
              100 Days to Become <br />
              <span className="text-[#2563EB]">
                Job-Ready. Not Just Certified.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed mb-8"
            >
              A structured, exam-driven, and project-based program that helps you become a job-ready software engineer. 
              You build skills in aptitude, DSA, full stack development, and AI while practicing real tasks every day. 
              The program focuses on coding, problem solving, project building, and interview preparation so you are ready for real job roles.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#choose-stream"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 font-bold transition-all hover:scale-[1.02] shadow-xl shadow-blue-600/20"
              >
                Choose Your Stream
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919989241515"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#2563EB]/35 px-8 py-4 font-bold text-[#2563EB] hover:bg-blue-50 transition-all hover:scale-[1.02]"
              >
                Talk to Admissions
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#2563EB]" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Badge Preview (Contrast Dark Card style like Hero Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[2.5rem] border border-white/70 bg-[#0F172A] p-5 shadow-2xl shadow-blue-950/25 max-w-md mx-auto w-full"
          >
            <div className="rounded-[1.8rem] bg-white p-6 space-y-6">
              <div className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-2xl border border-[#38BDF8]/20">
                <div className="p-3 bg-[#2563EB]/10 text-[#2563EB] rounded-xl">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0F172A] text-sm">6 Hours / Day</h4>
                  <p className="text-xs text-slate-500 font-medium">Classroom sessions + labs</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-2xl border border-[#38BDF8]/20">
                <div className="p-3 bg-blue-100 text-[#2563EB] rounded-xl">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0F172A] text-sm">16 Evaluations</h4>
                  <p className="text-xs text-slate-500 font-medium">Exams and core progress tests</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-2xl border border-[#38BDF8]/20">
                <div className="p-3 bg-sky-100 text-[#2563EB] rounded-xl">
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0F172A] text-sm">Dedicated Bootcamp</h4>
                  <p className="text-xs text-slate-500 font-medium">Corporate communication & aptitude</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR STREAM SECTION */}
      <section id="choose-stream" className="py-24 px-4 bg-white relative border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Choose Your Specialization Stream
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Select one of our specialized software tracks. Each has an optimized curriculum aligned with current market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {streams.map((stream) => (
              <motion.div 
                key={stream.slug}
                whileHover={{ y: -6 }}
                className={`rounded-[2rem] border ${stream.borderClass} bg-[#F8FAFC] p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden shadow-lg`}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${stream.glow}, transparent 55%)` }} />
                
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                    {stream.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                    {stream.description}
                  </p>
                  
                  <div className="border-t border-slate-200/60 pt-5 mb-8 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg salary package</span>
                    <span className="text-[#2563EB] font-extrabold text-base flex items-center gap-1">
                      <CurrencyRupeeIcon className="h-4 w-4" />
                      {stream.salary}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/courses/skill-development/${stream.slug}`)}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r ${stream.gradient} text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all shadow-md`}
                >
                  Explore Course Details
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 100 DAYS TIMELINE JOURNEY */}
      <section className="py-24 px-4 bg-[#F8FAFC] border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              The 100-Days Learning Pathway
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              How we structure your progress step-by-step from zero code to hired.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 space-y-12 py-2">
            {programMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline circle */}
                <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-4 border-[#F8FAFC] bg-[#2563EB] group-hover:scale-125 transition-transform duration-300" />
                
                <div>
                  <span className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-2">
                    {milestone.dayRange}
                  </span>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-medium">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILLS VELOCITY SCROLLER */}
      <section className="bg-[#F8FAFC] text-slate-800 py-16 relative overflow-hidden select-none border-y border-slate-200/60">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 flex justify-center py-2">
          <ScrollVelocity
            texts={[
              "Python ✦ Java Full Stack ✦ Web Designing ✦ Advanced Excel ✦ Data Science & AI ✦ Digital Marketing ✦ Cyber Security ✦ DevOps ✦",
              "100% Practical Training ✦ ISO 9001:2015 Certified ✦ 1000+ Placements Annually ✦ Tally Certified Partner ✦ Expert Industry Mentors ✦ Placement Support ✦"
            ]}
            velocity={70}
            numCopies={6}
            className="text-slate-800 font-extrabold"
            parallaxClassName="parallax w-full text-slate-800"
            scrollerClassName="scroller flex items-center justify-start text-slate-800"
          />
        </div>
      </section>

      {/* 5. BOTTOM ADMISSIONS CALL TO ACTION (Premium dark contrasting contrast banner matching styling) */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 md:p-14 border border-slate-800 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.12),transparent_45%)] pointer-events-none" />
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">Launch Your Engineering Career Now</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Admissions are open for upcoming batches. Secure your seat or talk to our admissions counselor for batch timing updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9989241515"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-white px-8 py-4 font-bold hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25"
              >
                Call Admissions (9989241515)
              </a>
              <a
                href="https://wa.me/919989241515"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800 px-8 py-4 font-bold text-white hover:bg-slate-700 transition-all hover:scale-[1.02]"
              >
                WhatsApp Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
