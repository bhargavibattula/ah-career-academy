import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "motion/react";
import ScrollVelocity from "../components/ScrollVelocity";
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  ClockIcon, 
  ClipboardDocumentCheckIcon, 
  CpuChipIcon, 
  CurrencyRupeeIcon, 
  GlobeAltIcon, 
  ArrowRightIcon, 
  SparklesIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";

// Custom Light-themed Company Badges (matching CompanyLogos.jsx layout)
const COMPANY_BADGES = {
  apple: (
    <div key="apple" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-5 w-5 fill-current text-black" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.08.2.12.31.12.87 0 1.94-.54 2.5-1.45z"/>
      </svg>
      <span className="font-semibold text-black tracking-tight text-base select-none">Apple</span>
    </div>
  ),
  facebook: (
    <div key="facebook" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-5 w-5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="font-semibold text-[#1877F2] tracking-tighter lowercase text-base select-none" style={{ textTransform: 'none' }}>facebook</span>
    </div>
  ),
  google: (
    <div key="google" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span className="font-semibold text-[#4285F4] tracking-tight text-base select-none" style={{ textTransform: 'none' }}>Google</span>
    </div>
  ),
  netflix: (
    <div key="netflix" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <span className="font-black text-[#E50914] tracking-widest text-base uppercase select-none">Netflix</span>
    </div>
  ),
  amazon: (
    <div key="amazon" className="flex flex-col items-center justify-center bg-white px-6 py-1.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <span className="font-black text-black text-sm tracking-tight leading-none lowercase select-none" style={{ textTransform: 'none' }}>amazon</span>
      <svg className="h-2 w-10 text-[#FF9900]" fill="currentColor" viewBox="0 0 76 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.38 8.44c15.22 8.76 43.14 8.76 58.36 0 1.94-1.12 4.14 1.16 2.46 2.58-13.68 11.58-49.6 11.58-63.28 0-1.68-1.42.52-3.7 2.46-2.58z"/>
        <path d="M62.62 5.08c-.76 1.84-1.24 3.76-1.44 5.76-.08.78.72 1.3 1.34.8l4.34-3.56c.56-.46.46-1.34-.18-1.66l-4.06-2.02c-.62-.32-1.26.24-1 .88z"/>
      </svg>
    </div>
  ),
  microsoft: (
    <div key="microsoft" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
        <div className="bg-[#F25022] w-1.5 h-1.5"></div>
        <div className="bg-[#7FBA00] w-1.5 h-1.5"></div>
        <div className="bg-[#00A4EF] w-1.5 h-1.5"></div>
        <div className="bg-[#FFB900] w-1.5 h-1.5"></div>
      </div>
      <span className="font-semibold text-black tracking-tight text-base select-none">Microsoft</span>
    </div>
  ),
  ibm: (
    <div key="ibm" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <span className="font-black text-[#006699] tracking-tighter text-base select-none" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>IBM</span>
    </div>
  ),
  intel: (
    <div key="intel" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <span className="font-extrabold text-[#0071C5] italic text-base select-none">intel</span>
    </div>
  ),
  adobe: (
    <div key="adobe" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-4 w-4 text-[#FF0000] fill-current" viewBox="0 0 24 24">
        <path d="M13.9 2h7.8L15 22h-3.8zM10.1 2H2.3L9 22h3.8zM12 9.5l4.8 12.5H13l-1.5-4h-3.8z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-base select-none">Adobe</span>
    </div>
  ),
  salesforce: (
    <div key="salesforce" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-4 w-6 text-[#00A1E0] fill-current" viewBox="0 0 24 24">
        <path d="M21.9 10.6c-.3-.7-.7-1.3-1.3-1.8.1-.4.2-.8.2-1.3 0-2.4-2-4.3-4.4-4.3-1.6 0-3 1-3.7 2.4-.6-.5-1.4-.8-2.2-.8-1.7 0-3.2 1.2-3.6 2.8-.7-.4-1.5-.6-2.4-.6-2.7 0-4.8 2.2-4.8 4.9 0 .4.1.8.2 1.2C.8 13.7 0 15 0 16.5 0 19 2 21 4.5 21h16.7c1.5 0 2.8-1.2 2.8-2.8 0-1.8-1.3-3.2-3.1-3.6.8-.9 1.1-2.4 1-4z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-xs select-none">salesforce</span>
    </div>
  ),
  oracle: (
    <div key="oracle" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <span className="font-black text-[#F80000] tracking-tight text-base select-none">ORACLE</span>
    </div>
  ),
  meta: (
    <div key="meta" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl border border-slate-200 shadow-md flex-shrink-0">
      <svg className="h-3.5 w-6 text-[#0064E0] fill-current" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.63 0c-2.38 0-4.34 1.54-5.36 3.82C10.25 1.54 8.29 0 5.9 0 2.64 0 0 2.64 0 5.9s2.64 5.9 5.9 5.9c2.38 0 4.34-1.54 5.36-3.82.97 2.28 2.93 3.82 5.37 3.82 3.26 0 5.9-2.64 5.9-5.9S19.89 0 16.63 0zm-.73 9.4c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm-10 0c-1.93 0-3.5-1.57-3.5-3.5S3.97 2.4 5.9 2.4s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-base select-none">Meta</span>
    </div>
  )
};

const COURSE_DATA = {
  "java-full-stack": {
    title: "Java Full Stack Developer",
    slug: "java-full-stack",
    headerGlow: "from-blue-600/10 via-sky-500/5 to-transparent",
    accentColor: "text-[#2563EB]",
    accentBg: "bg-blue-50 border-blue-200/50",
    buttonBg: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-blue-600/20",
    subtitle: "Enterprise Grade Applications",
    description: "Want to become a Java Full Stack Developer? Master object-oriented concepts, Spring Boot microservices, high-performance database management, and interactive modern frontend layouts.",
    skills: ["OOPs Concepts", "Collections Framework", "Multithreading & Concurrency", "Spring Boot", "REST APIs Development", "HTML5 & CSS3", "React.js", "MySQL / PostgreSQL", "AWS Cloud Basics", "Docker Containers", "Microservices Architecture"],
    tools: ["Eclipse IDE", "IntelliJ IDEA", "Postman", "Git & GitHub", "Docker Desktop", "AWS Console", "Maven Build Tool"],
    structure: [
      { icon: ClockIcon, value: "6 Hours / Day", desc: "Rigorous daily classes" },
      { icon: ClipboardDocumentCheckIcon, value: "16 Exams", desc: "Weekly review tests" },
      { icon: CpuChipIcon, value: "Real Projects", desc: "Live application development" },
      { icon: AcademicCapIcon, value: "Placement Bootcamp", desc: "Dedicated interview preparation" }
    ],
    careerPath: [
      { role: "Trainee Java Developer", phase: "Phase 1 - Basics & Core Principles" },
      { role: "Junior Backend Developer", phase: "Phase 2 - Frameworks & APIs" },
      { role: "Full Stack Developer", phase: "Phase 3 - Frontend Integration" },
      { role: "Senior Backend Engineer", phase: "Phase 4 - Advanced Microservices" }
    ],
    salaryRange: "₹5 - 10 LPA",
    hiringCompanies: ["google", "amazon", "microsoft", "ibm", "adobe", "oracle", "apple"],
    upcomingBatches: {
      intensivePro: ["01-05-2026", "15-05-2026"],
      launchPad: "Coming Soon!"
    }
  },
  "python-full-stack": {
    title: "Python Full Stack Developer",
    slug: "python-full-stack",
    headerGlow: "from-blue-600/10 via-sky-500/5 to-transparent",
    accentColor: "text-[#2563EB]",
    accentBg: "bg-blue-50 border-blue-200/50",
    buttonBg: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-blue-600/20",
    subtitle: "Rapid Web & SaaS Development",
    description: "Want to become a Python Full Stack Developer? Master Python development, build robust backend services using Flask, design reactive user interfaces with React, and deploy secure databases.",
    skills: ["Python Core", "Flask Framework", "React.js Integration", "HTML5 & CSS3", "MongoDB Atlas", "PostgreSQL Database", "RESTful API Specs", "JWT Authentication", "AWS Cloud Deployments", "Git Version Control", "Docker Containers"],
    tools: ["VS Code", "PyCharm Community", "Postman", "Git", "Docker", "MongoDB Compass", "AWS Interface"],
    structure: [
      { icon: ClockIcon, value: "6 Hours / Day", desc: "Rigorous daily classes" },
      { icon: ClipboardDocumentCheckIcon, value: "16 Exams", desc: "Weekly review tests" },
      { icon: CpuChipIcon, value: "Real Projects", desc: "Live SaaS products" },
      { icon: AcademicCapIcon, value: "Placement Bootcamp", desc: "Dedicated interview preparation" }
    ],
    careerPath: [
      { role: "Python Developer", phase: "Phase 1 - Scripting & Automation" },
      { role: "Backend Developer", phase: "Phase 2 - APIs & Databases" },
      { role: "Full Stack Developer", phase: "Phase 3 - Frontend Connections" },
      { role: "Startup Engineer / Freelancer", phase: "Phase 4 - Rapid Prototyping" },
      { role: "SaaS Product Developer", phase: "Phase 5 - Product Deployment" }
    ],
    salaryRange: "₹4 - 10 LPA",
    hiringCompanies: ["google", "meta", "netflix", "amazon", "salesforce", "apple"],
    upcomingBatches: {
      intensivePro: ["08-05-2026", "15-05-2026"],
      launchPad: "Coming Soon!"
    }
  },
  "data-analytics": {
    title: "Data Analyst Specialist",
    slug: "data-analytics",
    headerGlow: "from-blue-600/10 via-sky-500/5 to-transparent",
    accentColor: "text-[#2563EB]",
    accentBg: "bg-blue-50 border-blue-200/50",
    buttonBg: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-blue-600/20",
    subtitle: "Data-Driven Business Decisions",
    description: "Want to become a Data Analyst? Acquire deep capabilities in exploratory data analysis (EDA) using Python/Pandas, design professional dashboards in Power BI, write high-performance SQL queries, and implement introductory Machine Learning.",
    skills: ["Python Scripting", "NumPy & Scientific Computing", "Pandas DataFrames", "Exploratory Data Analysis (EDA)", "Matplotlib & Seaborn Plots", "Power BI Dashboards", "Deep Learning Intro", "Advanced SQL Queries", "TensorFlow Framework", "PyTorch Engine", "Data Visualization", "Statistical Analysis & Testing"],
    tools: ["Jupyter Notebook", "Power BI Desktop", "Microsoft SQL Server", "Tableau Creator", "Microsoft Excel", "Git & GitHub"],
    structure: [
      { icon: ClockIcon, value: "6 Hours / Day", desc: "Rigorous daily classes" },
      { icon: ClipboardDocumentCheckIcon, value: "16 Exams", desc: "Weekly review tests" },
      { icon: CpuChipIcon, value: "Real Projects", desc: "Analytical dashboards" },
      { icon: AcademicCapIcon, value: "Placement Bootcamp", desc: "Dedicated interview preparation" }
    ],
    careerPath: [
      { role: "Data Analyst", phase: "Phase 1 - Data Cleaning & SQL" },
      { role: "Business Analyst", phase: "Phase 2 - Dashboards & Power BI" },
      { role: "Senior Data Analyst", phase: "Phase 3 - Python & Machine Learning" },
      { role: "Analytics Manager", phase: "Phase 4 - Strategy & Leadership" }
    ],
    salaryRange: "₹6 - 20 LPA",
    hiringCompanies: ["google", "amazon", "microsoft", "meta", "ibm", "oracle"],
    upcomingBatches: {
      intensivePro: ["22-05-2026"],
      launchPad: "Coming Soon!"
    }
  }
};

export default function SkillCoursePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Find course config based on slug
  const course = COURSE_DATA[slug] || COURSE_DATA["java-full-stack"];

  const handleRegisterClick = () => {
    if (!user) {
      navigate("/login", { state: { from: `/courses/${course.slug}/register` } });
    } else {
      navigate(`/courses/${course.slug}/register`);
    }
  };

  // Compile specific hiring companies list
  const logoElements = course.hiringCompanies
    .map(name => COMPANY_BADGES[name])
    .filter(Boolean);

  const doubleLogosList = [...logoElements, ...logoElements, ...logoElements];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden font-sans">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4 border-b border-slate-200/50">
        {/* Backdrop Glow */}
        <div className={`absolute inset-0 bg-gradient-to-b ${course.headerGlow} z-0`} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto z-10 text-center lg:text-left grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 rounded-full border ${course.accentBg} px-4 py-1.5 text-sm font-bold ${course.accentColor} uppercase tracking-wider mb-6`}
            >
              <SparklesIcon className="h-4 w-4" />
              100 Days Acceleration Program
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#0F172A] mb-6"
            >
              Want to become a <br />
              <span className={course.accentColor}>
                {course.title}?
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed mb-8"
            >
              {course.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleRegisterClick}
                className={`flex items-center justify-center gap-2 rounded-xl ${course.buttonBg} px-8 py-4 font-bold transition-all hover:scale-[1.02] shadow-xl`}
              >
                Enroll In 100 Days Program
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <a
                href="https://wa.me/919989241515"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#2563EB]/35 px-8 py-4 font-bold text-[#2563EB] hover:bg-blue-50 transition-all hover:scale-[1.02]"
              >
                WhatsApp Counselor
              </a>
            </motion.div>
          </div>

          {/* Graphic/Banner Snapshot Card (Contrast Dark block style matching Hero dashboard) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[2rem] border border-white/70 bg-[#0F172A] p-4 shadow-2xl max-w-md mx-auto w-full"
          >
            <div className="rounded-2xl bg-white p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Goal</span>
                  <h4 className="text-lg font-extrabold text-[#0F172A] mt-1">Ready for Industry</h4>
                </div>
                <div className={`p-3 rounded-xl ${course.accentBg} ${course.accentColor}`}>
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm font-semibold text-slate-500">Job Support</span>
                  <span className="text-sm font-extrabold text-[#0F172A]">100% Guaranteed Rounds</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm font-semibold text-slate-500">Average Salary</span>
                  <span className={`text-base font-extrabold ${course.accentColor}`}>{course.salaryRange}</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-sm font-semibold text-slate-500">Format</span>
                  <span className="text-sm font-extrabold text-[#0F172A]">Project-driven Labs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SKILLS WALL & TOOLS SECTION */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Industry Relevant Skills & Tools
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Equip yourself with tools and skills required by leading companies globally. Not just theory—practical execution.
            </p>
          </div>

          {/* Skill Badges interactive grid */}
          <div className="mb-14">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-6 text-center">Skills Developed</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {course.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 rounded-2xl bg-[#F8FAFC] border border-[#38BDF8]/20 text-sm font-semibold text-slate-700 cursor-default hover:bg-blue-50/50 hover:text-[#2563EB] transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools Used section */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-6 text-center">Tools & Software Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {course.tools.map((tool) => (
                <div
                  key={tool}
                  className="px-5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs font-bold uppercase text-slate-600 tracking-wider flex items-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED AS SECTION */}
      <section className="py-20 px-4 bg-[#F8FAFC] border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Structured for Active Acceleration
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              We focus on continuous practice, evaluation, and direct professional development rounds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {course.structure.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#38BDF8]/40 transition-all shadow-lg"
                >
                  <div className={`inline-flex p-3 rounded-2xl ${course.accentBg} ${course.accentColor} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2">{item.value}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CAREER ROADMAP & SALARY VISUALIZER */}
      <section className="py-20 px-4 bg-white border-t border-slate-200/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Your Professional Career Path
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Clear progression steps from onboarding to high-scale roles.
            </p>
          </div>

          {/* Stepper Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 space-y-10 py-2">
            {course.careerPath.map((path, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline marker */}
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#2563EB] group-hover:scale-125 transition-transform duration-300" />
                
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#2563EB] uppercase block mb-1">
                    {path.phase}
                  </span>
                  <h4 className="text-xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {path.role}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Average Salary Highlight Widget */}
          <div className="mt-16 rounded-[2rem] bg-[#F8FAFC] p-8 border border-[#38BDF8]/25 text-center relative overflow-hidden shadow-xl max-w-2xl mx-auto">
            <div className="relative z-10">
              <CurrencyRupeeIcon className={`h-12 w-12 mx-auto mb-4 ${course.accentColor}`} />
              <h3 className="text-lg font-bold text-slate-600 uppercase tracking-wide">Average Industry Package</h3>
              <div className="text-4xl md:text-5xl font-black text-[#0F172A] my-3 tracking-tight">
                {course.salaryRange}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Depending on expertise levels, projects completed, and partner bootcamp evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP HIRING COMPANIES (INFINITE SCROLL - matching main page styling but using light backgrounds) */}
      <section className="bg-[#F8FAFC] text-slate-800 py-16 relative overflow-hidden select-none border-y border-slate-200/60">
        {/* Edge Gradient Overlay Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Top Hiring Partners for this Domain
          </h3>
        </div>

        <div className="relative z-20 flex justify-center py-2">
          {logoElements.length > 0 && (
            <ScrollVelocity
              texts={[
                <div className="flex items-center gap-6 py-2">
                  {doubleLogosList}
                </div>
              ]}
              velocity={70}
              numCopies={6}
              className="text-slate-800"
              parallaxClassName="parallax w-full text-slate-800"
              scrollerClassName="scroller flex items-center justify-start text-slate-800"
              scrollerStyle={{ textTransform: 'none' }}
            />
          )}
        </div>
      </section>

      {/* 6. UPCOMING BATCHES SECTION */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A]">Upcoming Learning Batches</h2>
            <p className="mt-3 text-slate-500 font-medium">Secure your seat inside our next active bootcamps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Intensive Pro batch */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col justify-between">
              <div>
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-extrabold uppercase ${course.accentBg} ${course.accentColor} mb-4`}>
                  Intensive Pro
                </span>
                <h4 className="text-2xl font-black text-[#0F172A] mb-2">{course.title}</h4>
                <p className="text-sm text-slate-500 font-medium mb-6">Structured active learning batch with complete project assessments.</p>
                
                <div className="space-y-3">
                  {course.upcomingBatches.intensivePro.map((date, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                      <CalendarIcon className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-bold">{date}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleRegisterClick}
                className={`mt-8 w-full py-3.5 rounded-xl ${course.buttonBg} font-bold transition-all hover:scale-[1.02] shadow-md`}
              >
                Apply for Batch
              </button>
            </div>

            {/* LaunchPad batch */}
            <div className="bg-white/60 rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-slate-100 text-slate-500 mb-4">
                  LaunchPad
                </span>
                <h4 className="text-2xl font-black text-slate-700 mb-2">{course.title}</h4>
                <p className="text-sm text-slate-500 font-medium mb-6">Beginner intro sessions designed to prepare foundations before main bootcamps.</p>
                
                <div className="flex items-center gap-3 text-slate-600">
                  <CalendarIcon className="h-5 w-5 text-[#2563EB]" />
                  <span className="text-sm font-bold">{course.upcomingBatches.launchPad}</span>
                </div>
              </div>
              <button
                onClick={handleRegisterClick}
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all hover:scale-[1.02] border border-slate-200/50"
              >
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="py-16 px-4 bg-white border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 md:p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.12),transparent_40%)] pointer-events-none" />
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">Still Confused About Your Roadmap?</h3>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed mb-8">
              Connect with our industry mentors for a completely customized career consultation session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9989241515"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-white px-8 py-4 font-bold shadow-lg hover:bg-[#1D4ED8] transition-all hover:scale-[1.02]"
              >
                Call Mentor (9989241515)
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
