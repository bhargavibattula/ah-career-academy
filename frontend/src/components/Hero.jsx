import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClockIcon,
  PhoneIcon,
  PlayCircleIcon,
  SparklesIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  { icon: <StarIcon className="h-4 w-4" />, text: "Top 3 EdTech Institute" },
  { icon: <UsersIcon className="h-4 w-4" />, text: "1000+ Placements Annually" },
  { icon: <ClockIcon className="h-4 w-4" />, text: "Industry-Expert Trainers" },
  { icon: <ChatBubbleLeftRightIcon className="h-4 w-4" />, text: "24/7 Learning Support" },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "25+", label: "Courses Offered" },
  { value: "100%", label: "Practical Training" },
  { value: "24/7", label: "Learning Support" },
];

const careerTracks = ["Full Stack", "Python", "Data Science", "Advanced Excel"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 py-16 text-[#0F172A] sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(37,99,235,0.12),transparent_36%,rgba(56,189,248,0.16)_72%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.16),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-white/85 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-sm shadow-blue-100">
            <SparklesIcon className="h-4 w-4" />
            Trusted career training since 2013
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-[#0F172A] sm:text-5xl lg:text-7xl">
            Build job-ready skills for a
            <span className="block text-[#2563EB]">faster tech career.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            Learn with practical projects, expert mentors, interview preparation, and placement-focused programs designed for real career outcomes.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">ISO 9001:2015 Certified</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Tally Certified Partner</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">MSME Registered</span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              <PhoneIcon className="h-5 w-5" />
              Talk To Expert
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#2563EB]/30 bg-white px-7 py-4 text-base font-bold text-[#2563EB] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#38BDF8] hover:bg-blue-50">
              <PlayCircleIcon className="h-5 w-5" />
              Get Free Demo Class
            </button>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#38BDF8]/25 bg-white/90 p-4 shadow-sm">
                <div className="text-2xl font-black text-[#2563EB]">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-[#0F172A] p-4 shadow-2xl shadow-blue-950/25 sm:p-5">
            <div className="rounded-[1.5rem] bg-white p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">Career Dashboard</div>
                  <h2 className="mt-1 text-2xl font-black text-[#0F172A]">Your next role starts here</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-600/25">
                  <AcademicCapIcon className="h-7 w-7" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-700">Placement prep</span>
                    <span className="rounded-full bg-[#38BDF8]/20 px-2.5 py-1 text-xs font-black text-[#2563EB]">Live</span>
                  </div>
                  <div className="space-y-3">
                    {["Resume Review", "Mock Interview", "Project Review"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-sm">
                          <CheckBadgeIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#0F172A]">{item}</div>
                          <div className="mt-1 h-1.5 rounded-full bg-blue-100">
                            <div
                              className="h-1.5 rounded-full bg-[#2563EB]"
                              style={{ width: `${82 - index * 14}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-4 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                    <BriefcaseIcon className="h-5 w-5" />
                    Placement support
                  </div>
                  <div className="mt-4 text-4xl font-black">100%</div>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/85">
                    Career guidance, HR prep, interview readiness, and company connect support.
                  </p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-sm font-bold">
                    <ArrowTrendingUpIcon className="h-5 w-5" />
                    Skill-to-job focused
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {careerTracks.map((track) => (
                  <div key={track} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 h-2 w-10 rounded-full bg-[#38BDF8]" />
                    <div className="text-sm font-black text-[#0F172A]">{track}</div>
                    <div className="mt-1 text-xs font-semibold text-slate-500">Industry curriculum</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {highlights.map((pill) => (
              <span
                key={pill.text}
                className="flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-white px-4 py-2 text-[13px] font-semibold text-slate-700 shadow-sm"
              >
                <span className="text-[#2563EB]">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
