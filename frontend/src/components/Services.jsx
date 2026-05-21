import {
  ArrowRightIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: BuildingLibraryIcon,
    title: "Classroom Training",
    desc: "In-person immersive learning at our Rajahmundry center with hands-on labs and direct mentor interaction.",
    stat: "Live labs",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Online Training",
    desc: "Learn from anywhere with live sessions, recorded support, mentor access, and guided assignments.",
    stat: "Flexible",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Corporate Training",
    desc: "Customized upskilling programs for teams with practical modules and measurable learning outcomes.",
    stat: "Teams",
  },
  {
    icon: BriefcaseIcon,
    title: "Internship Programs",
    desc: "Structured project experience with real-world workflows, reviews, and career-ready portfolio output.",
    stat: "Projects",
  },
  {
    icon: RocketLaunchIcon,
    title: "Skill-to-Job",
    desc: "Already trained elsewhere? Upgrade your practical skills and prepare for interviews with us.",
    stat: "Career path",
  },
  {
    icon: UserGroupIcon,
    title: "Career Guidance",
    desc: "One-on-one mentorship, resume building, mock interviews, and career path planning.",
    stat: "Mentorship",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-white px-4 py-1.5 text-sm font-bold text-[#2563EB] shadow-sm">
              <SparklesIcon className="h-4 w-4" />
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              Complete <span className="text-[#2563EB]">Learning Ecosystem</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-500 sm:text-base">
              Everything a student needs to learn, practice, prepare, and move confidently toward a professional career.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-2xl shadow-blue-950/20">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Practical", "hands-on learning"],
                ["Mentor-led", "guided progress"],
                ["Career-first", "interview support"],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <CheckCircleIcon className="mb-3 h-6 w-6 text-[#38BDF8]" />
                  <div className="font-black">{title}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-[#38BDF8]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#2563EB]">
                    {service.stat}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0F172A]">{service.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm font-medium leading-6 text-slate-500">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-black text-[#2563EB]">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
