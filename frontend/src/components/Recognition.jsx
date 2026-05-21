import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const achievements = [
  {
    icon: TrophyIcon,
    title: "25 Years Trusted Service",
    desc: "Long-standing training presence with a strong student-first reputation.",
  },
  {
    icon: ShieldCheckIcon,
    title: "ISO 9001:2015 Certified",
    desc: "Quality-focused learning systems and structured delivery standards.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Tally Certified Partner",
    desc: "Trusted accounting and business software training recognition.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "MSME Registered",
    desc: "Recognized professional training organization with industry alignment.",
  },
];

const proofStats = [
  { value: "13+", label: "Years shaping careers" },
  { value: "25+", label: "Career-ready programs" },
  { value: "1000+", label: "Annual placements" },
];

const media = ["Economic Times", "Times of India", "The Hindu", "Tech News", "India Today"];

export default function Recognition() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#2563EB]">
            <SparklesIcon className="h-4 w-4" />
            Recognition
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            Recognized <span className="text-[#2563EB]">Excellence</span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-slate-500 sm:text-base">
            Built on trusted certifications, practical training standards, and years of student career outcomes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-blue-100 bg-[#F8FAFC] p-5 shadow-sm">
                  <div className="text-3xl font-black text-[#2563EB]">{stat.value}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <article
                    key={achievement.title}
                    className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-black text-[#0F172A]">{achievement.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{achievement.desc}</p>
                  </article>
                );
              })}
            </div>

            <div className="rounded-3xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-black text-[#0F172A]">
                <NewspaperIcon className="h-5 w-5 text-[#2563EB]" />
                Featured In
              </div>
              <div className="flex flex-wrap gap-2">
                {media.map((item) => (
                  <span key={item} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0F172A] p-6 text-white shadow-2xl shadow-blue-950/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#38BDF8]">Awarded For</p>
                  <h3 className="mt-2 text-3xl font-black leading-tight">Premier Training Institute</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-300">in Rajahmundry</p>
                </div>
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#38BDF8] text-[#0F172A]">
                  <TrophyIcon className="h-8 w-8" />
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 text-center text-[#0F172A]">
                <AcademicCapIcon className="mx-auto h-16 w-16 text-[#2563EB]" />
                <div className="mt-4 text-2xl font-black">AH Career Academy</div>
                <div className="mt-1 text-sm font-bold text-[#2563EB]">Empowering students since 2013</div>
                <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <StarIcon className="mb-3 h-6 w-6 text-[#38BDF8]" />
                  <div className="text-sm font-black">Future-ready skills</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">Practical, career-first training</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <ShieldCheckIcon className="mb-3 h-6 w-6 text-[#38BDF8]" />
                  <div className="text-sm font-black">Trusted standards</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">Certified learning experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
