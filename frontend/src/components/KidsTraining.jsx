import { useState, useEffect } from "react";

const courses = [
  {
    title: "Scratch Programming",
    desc: "Build games, stories & animations with drag-and-drop coding blocks",
    duration: "30 Days",
    icon: "🧩",
    accent: "#7C3AED",
    bg: "from-violet-50 to-purple-100",
    badge: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
  },
  {
    title: "Canva Designing",
    desc: "Create stunning posters, greetings, and social media content",
    duration: "25 Days",
    icon: "🎨",
    accent: "#DB2777",
    bg: "from-pink-50 to-rose-100",
    badge: "bg-pink-100 text-pink-700",
    border: "border-pink-200",
  },
  {
    title: "Spoken English",
    desc: "Master speaking, listening & communication for real-world confidence",
    duration: "30 Days",
    icon: "🗣️",
    accent: "#0284C7",
    bg: "from-sky-50 to-blue-100",
    badge: "bg-sky-100 text-sky-700",
    border: "border-sky-200",
  },
  {
    title: "Future with AI",
    desc: "Explore Artificial Intelligence in a fun, hands-on learning journey",
    duration: "35 Days",
    icon: "🤖",
    accent: "#059669",
    bg: "from-emerald-50 to-green-100",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
  },
];

const reasons = [
  {
    icon: "🎈",
    title: "Fun-First Learning",
    desc: "Every class is designed around games, activities, and creative challenges — so kids actually look forward to coming back every day.",
    accent: "#F97316",
    bg: "from-orange-50 to-amber-100",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-800",
    stat: "95%",
    statLabel: "kids love it",
  },
  {
    icon: "🛠️",
    title: "Hands-On Projects",
    desc: "Kids don't just watch — they build real games, design posters, record speaking videos, and explore AI tools themselves.",
    accent: "#7C3AED",
    bg: "from-violet-50 to-purple-100",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-800",
    stat: "4",
    statLabel: "live projects",
  },
  {
    icon: "🛡️",
    title: "100% Safe Environment",
    desc: "Supervised sessions, vetted instructors, and a child-friendly digital space ensure complete peace of mind for parents.",
    accent: "#0284C7",
    bg: "from-sky-50 to-blue-100",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-800",
    stat: "ISO",
    statLabel: "9001:2015 certified",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Live Trainers",
    desc: "Industry-experienced educators with a passion for teaching young minds — no recorded videos, only live interactive classes.",
    accent: "#059669",
    bg: "from-emerald-50 to-green-100",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    stat: "25+",
    statLabel: "yrs of service",
  },
  {
    icon: "🎓",
    title: "Certificate Provided",
    desc: "Every child receives an officially recognized certificate of completion — a real achievement they'll be proud to show.",
    accent: "#DB2777",
    bg: "from-pink-50 to-rose-100",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-800",
    stat: "100%",
    statLabel: "get certified",
  },
  {
    icon: "⚡",
    title: "Small Batch Classes",
    desc: "Limited seats per batch means every child gets personal attention, not just a seat in a crowded classroom.",
    accent: "#D97706",
    bg: "from-amber-50 to-yellow-100",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    stat: "<15",
    statLabel: "kids per batch",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Arjun, 11",
    text: "My son built his first game in Scratch within 2 weeks. He now talks about coding every evening!",
    avatar: "PS",
    color: "#7C3AED",
  },
  {
    name: "Ravi Kumar",
    role: "Parent of Diya, 9",
    text: "The Canva course surprised us — Diya designed our family's Diwali card all by herself this year.",
    avatar: "RK",
    color: "#DB2777",
  },
  {
    name: "Meena Rao",
    role: "Parent of Karthik, 13",
    text: "Karthik's confidence in English has shot up. He volunteered to speak at school assembly last month!",
    avatar: "MR",
    color: "#0284C7",
  },
];

const trustBadges = [
  { label: "ISO 9001:2015 Certified", icon: "✅" },
  { label: "MSME Registered", icon: "🏛️" },
  { label: "AICTE Approved", icon: "📋" },
  { label: "Tally Certified Partner", icon: "🌟" },
  { label: "25 Years of Service", icon: "🏆" },
];

const floatingIcons = [
  { icon: "⭐", top: "10%", left: "4%", delay: "0s", size: "text-2xl" },
  { icon: "🚀", top: "18%", right: "5%", delay: "0.5s", size: "text-3xl" },
  { icon: "💡", top: "55%", left: "2%", delay: "1s", size: "text-2xl" },
  { icon: "🌈", top: "70%", right: "3%", delay: "1.5s", size: "text-2xl" },
  { icon: "✏️", top: "38%", left: "1.5%", delay: "0.8s", size: "text-xl" },
  { icon: "🎯", top: "82%", left: "6%", delay: "0.3s", size: "text-xl" },
];

const stats = [
  { value: "12,000+", label: "Happy Students", icon: "👦" },
  { value: "150+", label: "Expert Trainers", icon: "👨‍🏫" },
  { value: "4", label: "Unique Courses", icon: "📚" },
  { value: "98%", label: "Parent Satisfaction", icon: "❤️" },
];

export default function SummerCampPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null);

  return (
    <div
      className="w-full font-sans overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #FFF0FB 40%, #F0F8FF 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@600;700;800&display=swap');

        .sc-display { font-family: 'Baloo 2', cursive; }
        .sc-body { font-family: 'Nunito', sans-serif; }

        @keyframes scFloat {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(5deg); }
        }
        @keyframes scFloatAlt {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(14px) rotate(-5deg); }
        }
        @keyframes scFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes scScaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scBlob {
          0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes scShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .sc-float { animation: scFloat 4s ease-in-out infinite; }
        .sc-float-alt { animation: scFloatAlt 5s ease-in-out infinite; }
        .sc-fade-up { animation: scFadeUp 0.7s ease forwards; opacity: 0; }
        .sc-scale-in { animation: scScaleIn 0.5s ease forwards; opacity: 0; }
        .sc-blob { animation: scBlob 8s ease-in-out infinite; }

        .sc-shimmer-text {
          background: linear-gradient(90deg, #F97316, #EC4899, #7C3AED, #0EA5E9, #F97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: scShimmer 4s linear infinite;
        }

        .sc-glass {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1);
        }

        .sc-glass-dark {
          background: rgba(255,255,255,0.35);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255,255,255,0.8);
        }

        .sc-cta {
          background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
          box-shadow: 0 8px 24px rgba(249,115,22,0.4), 0 2px 8px rgba(249,115,22,0.2);
          transition: all 0.3s ease;
          font-family: 'Baloo 2', cursive;
        }
        .sc-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(249,115,22,0.5), 0 4px 12px rgba(249,115,22,0.3);
        }

        .sc-outline-btn {
          border: 2px solid rgba(249,115,22,0.5);
          color: #F97316;
          transition: all 0.3s ease;
          font-family: 'Nunito', sans-serif;
          background: transparent;
        }
        .sc-outline-btn:hover {
          background: rgba(249,115,22,0.08);
          border-color: #F97316;
          transform: translateY(-2px);
        }

        .sc-course-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .sc-course-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 24px 64px rgba(0,0,0,0.13) !important;
        }
        .sc-course-card:hover .sc-course-icon {
          transform: scale(1.12) rotate(6deg);
        }
        .sc-course-icon {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        .sc-reason-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(255,255,255,0.95);
          box-shadow: 0 6px 28px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1);
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .sc-reason-card:hover {
          transform: translateY(-10px) scale(1.02);
        }
        .sc-reason-card:hover .sc-reason-icon {
          transform: scale(1.15) rotate(6deg);
        }
        .sc-reason-icon {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        .sc-testimonial-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .sc-testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.1);
        }

        .sc-stat-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .sc-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }

        .sc-hero-badge {
          background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(236,72,153,0.1));
          border: 1.5px solid rgba(249,115,22,0.3);
        }

        .sc-wcu-divider {
          height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0.2; margin: 12px 0;
        }

        .sc-badge-strip {
          background: linear-gradient(135deg, #1E1B4B, #312E81);
          box-shadow: 0 8px 32px rgba(30,27,75,0.25);
        }
      `}</style>

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="sc-blob absolute w-80 h-80 opacity-30" style={{ background: "linear-gradient(135deg,#FBCFE8,#DDD6FE)", top: "-5%", left: "-8%" }} />
        <div className="sc-blob absolute w-72 h-72 opacity-25" style={{ background: "linear-gradient(135deg,#BAE6FD,#A7F3D0)", top: "30%", right: "-5%", animationDelay: "3s" }} />
        <div className="sc-blob absolute w-64 h-64 opacity-20" style={{ background: "linear-gradient(135deg,#FDE68A,#FCA5A5)", bottom: "5%", left: "20%", animationDelay: "5s" }} />
      </div>

      <div className="relative sc-body" style={{ zIndex: 1 }}>

        {/* ─────────── HERO ─────────── */}
        <section className="relative px-6 md:px-12 pt-14 pb-20 flex flex-col items-center text-center">

          {floatingIcons.map((f, i) => (
            <span
              key={i}
              className={`absolute ${f.size} select-none pointer-events-none hidden md:block ${i % 2 === 0 ? "sc-float" : "sc-float-alt"}`}
              style={{ top: f.top, left: f.left, right: f.right, animationDelay: f.delay, opacity: 0.65 }}
            >
              {f.icon}
            </span>
          ))}

          <div className="sc-hero-badge sc-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-orange-600 font-bold text-sm mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="relative w-2 h-2 flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            Admissions Open · Summer 2025
          </div>

          <h1
            className="sc-display sc-fade-up text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight max-w-4xl mb-4"
            style={{ animationDelay: "0.2s", letterSpacing: "-0.02em" }}
          >
            Best Online Learning
            <br />
            <span className="sc-shimmer-text">For Kids</span> 🌟
          </h1>

          <p
            className="sc-fade-up text-gray-500 text-lg md:text-xl max-w-xl font-medium mb-8"
            style={{ animationDelay: "0.35s", lineHeight: 1.6 }}
          >
            Give your child a creative edge with fun, practical courses taught by expert trainers in a safe environment.
          </p>

          {/* <div className="sc-fade-up flex flex-wrap justify-center gap-4 mb-10" style={{ animationDelay: "0.5s" }}>
            <button className="sc-cta text-white font-bold px-8 py-3.5 rounded-full text-base flex items-center gap-2">
              Get Started Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="sc-glass text-gray-700 font-bold px-8 py-3.5 rounded-full text-base hover:bg-white transition-all flex items-center gap-2">
              <span>▶</span> Watch Demo
            </button> */}
          {/* </div> */}

          <div className="sc-fade-up flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.6s" }}>
            {["👦 Ages 7–15", "🎓 Certificate Included", "⚠️ Limited Seats"].map((tag, i) => (
              <span
                key={i}
                className="sc-glass text-gray-700 text-sm font-semibold px-4 py-2 rounded-full"
                style={{
                  border: i === 2 ? "1.5px solid rgba(239,68,68,0.4)" : undefined,
                  color: i === 2 ? "#DC2626" : undefined,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="sc-scale-in mt-14 w-full max-w-4xl" style={{ animationDelay: "0.7s" }}>
            <div className="sc-glass rounded-3xl px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xl">
              <div className="text-6xl md:text-8xl">🧒</div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Trusted by 12,000+ families</p>
                <h2 className="sc-display text-2xl md:text-3xl font-black text-gray-900 mb-2">Join the most loved kids camp this summer!</h2>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
                  <span className="text-gray-500 text-sm ml-2 font-semibold">4.9/5 · 2,400+ reviews</span>
                </div>
              </div>
              <div className="text-6xl md:text-8xl">👧</div>
            </div>
          </div>
        </section>

        {/* ─────────── COURSES ─────────── */}
        <section className="px-6 md:px-12 pb-24">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">🎒 What We Teach</p>
            <h2 className="sc-display text-3xl md:text-4xl font-black text-gray-900 mb-3">Courses in Summer Camp</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base font-medium">
              Exciting tech and creative skills designed to make learning fun and engaging for young minds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className={`sc-course-card rounded-2xl p-6 border ${course.border} cursor-pointer`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ boxShadow: hoveredCard === i ? `0 20px 60px ${course.accent}28` : undefined }}
              >
                <div className={`sc-course-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${course.bg} flex items-center justify-center text-3xl mb-5 border ${course.border}`}>
                  {course.icon}
                </div>
                <h3 className="sc-display text-lg font-black text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-medium">{course.desc}</p>
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${course.badge}`}>
                  ⏱ {course.duration}
                </div>
                <div
                  className={`mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-300 ${hoveredCard === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                  style={{ color: course.accent }}
                >
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────── WHY CHOOSE US ─────────── */}
        <section className="px-6 md:px-12 pb-24 relative">
          {/* Subtle background blobs for this section */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle,#FCA5A5,transparent 70%)", transform: "translate(30%,-30%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle,#A5B4FC,transparent 70%)", transform: "translate(-30%,30%)" }} />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-14">
              <span className="inline-block bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                🏕️ Why AH Career Academy
              </span>
              <h2 className="sc-display text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                Why Choose <span style={{ color: "#F97316" }}>Us?</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium" style={{ lineHeight: 1.7 }}>
                We're not just another summer course — we're a 25-year-trusted academy that blends modern tech skills with real learning outcomes.
              </p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-300" />
              </div>
            </div>

            {/* Reasons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`sc-reason-card rounded-2xl p-6 border ${r.border} cursor-default`}
                  onMouseEnter={() => setHoveredReason(i)}
                  onMouseLeave={() => setHoveredReason(null)}
                  style={{ boxShadow: hoveredReason === i ? `0 20px 60px ${r.accent}22` : undefined }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`sc-reason-icon w-14 h-14 rounded-xl bg-gradient-to-br ${r.bg} border ${r.border} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="sc-display text-lg font-black text-gray-900 mb-0.5">{r.title}</h3>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${r.badge}`}>
                        {r.stat} {r.statLabel}
                      </span>
                    </div>
                  </div>
                  <div className="sc-wcu-divider" style={{ color: r.accent }} />
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">💬 What Parents Say</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t) => (
                  <div key={t.name} className="sc-testimonial-card rounded-2xl p-5">
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400" style={{ fontSize: 14 }}>★</span>)}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0" style={{ background: t.color }}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs font-semibold">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats banner */}
            <div className="rounded-3xl p-8 md:p-12 mb-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1E1B4B 0%,#312E81 60%,#1a3a6b 100%)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle,#F97316,transparent)", transform: "translate(40%,-40%)" }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle,#A5B4FC,transparent)", transform: "translate(-40%,40%)" }} />
              <div className="relative z-10 text-center mb-10">
                <p className="text-purple-300 font-bold text-sm uppercase tracking-widest mb-2">By the Numbers</p>
                <h3 className="sc-display text-3xl font-black text-white">Our Track Record Speaks</h3>
              </div>
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { val: "12,000+", label: "Kids Trained", color: "#F97316" },
                  { val: "25 Yrs", label: "Trusted Service", color: "#A78BFA" },
                  { val: "98%", label: "Parent Satisfaction", color: "#34D399" },
                  { val: "4 Courses", label: "This Summer", color: "#60A5FA" },
                ].map((s) => (
                  <div key={s.label} className="text-center" style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: "1.5rem 1rem", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="sc-display font-black mb-1" style={{ fontSize: 28, color: s.color }}>{s.val}</div>
                    <div className="text-purple-200 font-semibold" style={{ fontSize: 13 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="sc-badge-strip rounded-2xl px-6 py-5 mb-14 flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white" style={{ background: "rgba(255,255,255,0.1)", borderRadius: 24, padding: "6px 14px", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <span style={{ fontSize: 14 }}>{b.icon}</span>
                  <span className="font-bold text-xs">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Address + contact */}
            <div className="sc-glass rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-5 border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: "linear-gradient(135deg,#F97316,#F59E0B)" }}>AH</div>
                <div>
                  <p className="sc-display font-black text-gray-900 text-base">AH Career Academy of Skills</p>
                  <p className="text-gray-500 text-xs font-semibold">Nandam Gani Raju Junct., Beside UCO Bank, T.T.D Road, Danavaipet, Rajahmundry</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-1">
                <p className="sc-display font-black text-xl" style={{ color: "#F97316" }}>📞 0883-2474088</p>
                <p className="sc-display font-black text-xl" style={{ color: "#F97316" }}>📱 99892 41515</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-6">
              <p className="text-gray-400 font-semibold text-sm mb-5">⚠️ Seats filling fast — Summer 2025 batch nearly full!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="sc-cta text-white font-black px-10 py-4 rounded-full text-base inline-flex items-center gap-2">
                  Enroll My Child Now 🚀
                </button>
                <button className="sc-outline-btn px-8 py-4 rounded-full font-bold text-base">
                  WhatsApp Us →
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}