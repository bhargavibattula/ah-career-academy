import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ScrollVelocity from "../components/ScrollVelocity";
import SEO from "../components/SEO";
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

const iconMap = {
  AcademicCapIcon: AcademicCapIcon,
  CpuChipIcon: CpuChipIcon,
  ClockIcon: ClockIcon,
  BriefcaseIcon: BriefcaseIcon
};

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
  {
    dayRange: "Day 1 - 30",
    title: "Foundation & Core Logic",
    desc: "Master basic language syntax, OOPs, data structures, algorithms, and logical problem solving.",
    icon: "AcademicCapIcon",
    color: "blue",
    points: [
      "Language Syntax & Paradigm Fundamentals (Java/Python)",
      "Object-Oriented Programming (OOP) Principles & Design Patterns",
      "Core Data Structures (Arrays, Linked Lists, Stacks, Queues, HashMaps)",
      "Essential Algorithms (Searching, Sorting, and Time/Space Complexity)",
      "Weekly Core Coding Evaluations & Speed Optimization Drills"
    ]
  },
  {
    dayRange: "Day 31 - 60",
    title: "Advanced Frameworks & Databases",
    desc: "Build RESTful APIs using Spring Boot, Flask or SQL queries. Integrate database triggers and storage architectures.",
    icon: "CpuChipIcon",
    color: "sky",
    points: [
      "RESTful API Development & Service-Oriented Architecture Design",
      "Enterprise Backend Frameworks (Spring Boot / Flask / Node.js)",
      "Relational (MySQL/PostgreSQL) & NoSQL (MongoDB) Schema Modeling",
      "Complex SQL Queries, Database Triggers, Indexing, and Store Procedures",
      "Modern Authentication Protocols (JWT, OAuth2, and Middleware Security)"
    ]
  },
  {
    dayRange: "Day 61 - 80",
    title: "Real-World Industry Projects",
    desc: "Work in active lab environments. Deploy multi-tier apps with frontend UI (React) and docker containers.",
    icon: "ClockIcon",
    color: "indigo",
    points: [
      "Dynamic Frontend Development with React.js & Tailwind CSS",
      "Advanced State Management (Redux Toolkit / Context API) & Client Routing",
      "Containerization and Service Isolation using Docker & Docker Compose",
      "Setting up Automated CI/CD Pipelines (GitHub Actions / Jenkins)",
      "End-to-End Capstone Project with Live Hosting, Domains, and SSL Certificates"
    ]
  },
  {
    dayRange: "Day 81 - 100",
    title: "Placement Bootcamp & Mock Drives",
    desc: "Resume editing, behavioral rounds, coding assessments, and direct interviews with top-tier hiring partners.",
    icon: "BriefcaseIcon",
    color: "emerald",
    isFeatured: true,
    points: [
      "ATS-Optimized Resume Overhaul & Tech-Specific Customization",
      "Professional LinkedIn & GitHub Developer Portfolio Enhancement",
      "Daily Technical MCQ & Live Code-Execution Assessments",
      "1-on-1 Mock Interviews with Senior Industry Mentors & Engineers",
      "Comprehensive Behavioral, HR & Salary Negotiation Workshops",
      "Direct Recruitment Drives & Referrals to 100+ Hiring Partners"
    ],
    bootcampPillars: [
      {
        title: "Resume & Branding",
        days: "Days 81 - 85",
        desc: "Overhaul resumes to bypass automated ATS filters, and optimize LinkedIn & GitHub profiles to showcase developer projects.",
        status: "High Impact"
      },
      {
        title: "Mock Technical Rounds",
        days: "Days 86 - 90",
        desc: "Simulate live whiteboarding, system design, and algorithmic problem solving with real feedback scorecards.",
        status: "1-on-1 Mentor"
      },
      {
        title: "Aptitude & Assessments",
        days: "Days 91 - 95",
        desc: "Timed practice tests covering quantitative aptitude, logical reasoning, and industry-standard coding platforms.",
        status: "Weekly Tests"
      },
      {
        title: "Direct Hiring Drives",
        days: "Days 96 - 100",
        desc: "Fast-track interviews with 100+ corporate hiring partners for junior, mid-level and associate engineer roles.",
        status: "Guaranteed Referrals"
      }
    ],
    placementStats: [
      { label: "Placement Rate", value: "93%" },
      { label: "Average Package", value: "₹6.5 LPA" },
      { label: "Highest Package", value: "₹20 LPA" },
      { label: "Hiring Partners", value: "100+" }
    ]
  }
];

export default function JobAccelerationProgramPage() {
  const navigate = useNavigate();
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to Day 81 - 100 (index 3)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden font-sans">
      <SEO 
        title="Job Acceleration Program"
        description="Launch your software engineering career in 100 days. Specialized tracks in Java, Python, and Data Analytics with certified corporate mentoring and active placements."
        keywords="100 days software engineering bootcamp, java web developer, python backend class, data analyst course, corporate job training institute"
      />
      
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
              Click on each milestone to explore key objectives, curriculum breakdown, and career acceleration details.
            </p>
          </div>

          <div className="space-y-6">
            {programMilestones.map((milestone, idx) => {
              const IconComponent = iconMap[milestone.icon] || AcademicCapIcon;
              const isOpen = activeMilestone === idx;
              
              return (
                <div 
                  key={idx}
                  className={`rounded-[2rem] border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'border-[#2563EB] bg-white shadow-xl shadow-blue-600/5' 
                      : 'border-slate-200/80 bg-white/70 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                  onClick={() => setActiveMilestone(idx)}
                >
                  {/* Card Header */}
                  <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                    {/* Circle icon container */}
                    <div className={`p-4 rounded-2xl flex-shrink-0 transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-[#2563EB] text-white' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit ${
                          isOpen 
                            ? 'bg-[#2563EB]/10 text-[#2563EB]' 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {milestone.dayRange}
                        </span>
                        {milestone.isFeatured && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit">
                            <SparklesIcon className="h-3 w-3" />
                            PLACEMENT BOOTCAMP
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-black text-[#0F172A] mb-2 flex items-center gap-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {milestone.desc}
                      </p>
                    </div>

                    {/* Expand/Collapse Chevron Indicator */}
                    <div className="self-center hidden sm:block">
                      <svg 
                        className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-[#2563EB]' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Content (Expandable with CSS transitions) */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen 
                      ? "max-h-[1500px] opacity-100 border-t border-slate-100 bg-[#FBFDFE] p-6 md:p-8 space-y-8" 
                      : "max-h-0 opacity-0 p-0"
                  }`}>
                    {/* Objectives/Points list */}
                    <div>
                      <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                        Key Learning Objectives & Skills
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {milestone.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                            <CheckCircleIcon className="h-5 w-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* If Placement Bootcamp: Render detailed bootcamp features & statistics */}
                    {milestone.isFeatured && (
                      <>
                        {/* 4 Pillars of Placement Bootcamp */}
                        <div className="space-y-4">
                          <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Bootcamp Implementation Plan
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {milestone.bootcampPillars.map((pillar, pilIdx) => (
                              <div 
                                key={pilIdx} 
                                className="p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-emerald-500/30 hover:shadow-md transition-all group"
                              >
                                <div>
                                  <div className="flex justify-between items-start gap-2 mb-3">
                                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                      {pillar.days}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-400 border border-slate-200/80 px-2 py-0.5 rounded-full">
                                      {pillar.status}
                                    </span>
                                  </div>
                                  <h6 className="text-base font-extrabold text-slate-800 mb-1 group-hover:text-[#2563EB] transition-colors">
                                    {pillar.title}
                                  </h6>
                                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                    {pillar.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stat Counter Badges */}
                        <div className="space-y-4 pt-2 border-t border-slate-100">
                          <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Placement Statistics & Track Record
                          </h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {milestone.placementStats.map((stat, sIdx) => (
                              <div key={sIdx} className="bg-white border border-slate-200/60 p-4 rounded-2xl text-center shadow-sm">
                                <div className="text-2xl md:text-3xl font-black text-[#2563EB] mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Mock Drive */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/80 mt-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500 text-white rounded-lg hidden sm:block">
                              <BriefcaseIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <h6 className="text-sm font-extrabold text-slate-800">Ready to boost your career prospects?</h6>
                              <p className="text-xs text-slate-500 font-medium">Join our next batch and get access to exclusive mock drives.</p>
                            </div>
                          </div>
                          <a
                            href="https://wa.me/919989241515"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-600/10 flex items-center gap-1.5 hover:scale-[1.02] transition-all"
                          >
                            Reserve Slot
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
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
