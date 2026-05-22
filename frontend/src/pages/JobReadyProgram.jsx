import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const highlights = [
  {
    title: "Full Stack Development",
    description: "Master frontend and backend technologies to build complete, scalable web applications.",
    icon: AcademicCapIcon,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in problem-solving and coding efficiency for technical interviews.",
    icon: ChartBarIcon,
  },
  {
    title: "Communication Skills",
    description: "Improve verbal and written communication to perform confidently in professional settings.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Aptitude Training",
    description: "Sharpen logical reasoning and quantitative skills for placement assessment rounds.",
    icon: LightBulbIcon,
  },
];

const techStack = ["Java", "Python", "HTML", "CSS", "JavaScript", "React.js", "Node.js"];

const placements = [
  { label: "Placement Support", value: "100%", icon: ShieldCheckIcon },
  { label: "Salary Package", value: "4.0 - 12.0 LPA", icon: BriefcaseIcon },
  { label: "Preparation", value: "Mock Interviews", icon: UserGroupIcon },
  { label: "Career Ready", value: "Resume Building", icon: CheckCircleIcon },
];

const whyAHCareer = [
  { title: "Expert Faculties", desc: "Learn from experienced trainers with years of real-world project and mentoring experience." },
  { title: "Practical Learning", desc: "Build confidence through projects, practice tasks, and applied technical training." },
  { title: "Interview Preparation", desc: "Dedicated technical, aptitude, resume, communication, and HR preparation support." },
  { title: "Limited Batch Size", desc: "Focused classroom attention so every student receives better guidance and feedback." },
];

export default function JobReadyProgram() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleRegisterClick = () => {
    if (!user) navigate("/login", { state: { from: `/courses/job-ready/register` } });
    else navigate(`/courses/job-ready/register`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.24),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
              <SparklesIcon className="h-4 w-4" />
              Flagship Program
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Job Ready Training Program
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
              Become job ready with industry skills. Learn, practice, prepare for interviews, and move from student today to professional tomorrow.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleRegisterClick}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#38BDF8] px-8 py-4 text-sm font-black text-[#0F172A] shadow-xl shadow-sky-400/20 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Enroll Now
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <a
                href="https://wa.me/919989241515"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#0F172A]"
              >
                WhatsApp Counselor
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-blue-950/20 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-[#0F172A]">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2563EB]">Program Snapshot</p>
                  <h2 className="mt-2 text-2xl font-black">Career-focused bootcamp</h2>
                </div>
                <AcademicCapIcon className="h-12 w-12 rounded-2xl bg-blue-50 p-2 text-[#2563EB]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["4 Months", "Duration"],
                  ["6 Hours", "Daily Time"],
                  ["ISO", "Certified"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-[#F8FAFC] p-4">
                    <div className="text-xl font-black text-[#2563EB]">{value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-5 text-white">
                <BriefcaseIcon className="mb-3 h-7 w-7" />
                <div className="text-2xl font-black">100% Placement Support</div>
                <p className="mt-2 text-sm font-medium leading-6 text-white/85">
                  Resume building, mock interviews, HR preparation, and counselor support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-white px-4 py-1.5 text-sm font-bold text-[#2563EB] shadow-sm">
              <AcademicCapIcon className="h-4 w-4" />
              Program Highlights
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Skills that prepare you for real interviews
            </h2>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-500 sm:text-base">
              A complete training path covering technical depth, projects, communication, aptitude, and interview readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-500">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Technologies you&apos;ll master</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-500">
            Build a practical foundation across frontend, backend, and programming fundamentals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-2xl border border-blue-100 bg-[#F8FAFC] px-6 py-3 text-sm font-black text-slate-700 transition-all hover:border-[#38BDF8] hover:bg-white hover:text-[#2563EB] hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
              <ShieldCheckIcon className="h-4 w-4" />
              Placement Support
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Built beyond classroom learning</h2>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-300 sm:text-base">
              We support students with preparation systems designed for real hiring conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {placements.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl bg-white/10 p-6 text-center ring-1 ring-white/10 transition-all hover:bg-white/15">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38BDF8] text-[#0F172A]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative rounded-[2rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-900/10">
            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#0F172A]">
              <UserIcon className="h-32 w-32 text-white/20" />
            </div>
            <div className="absolute -bottom-5 -right-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#2563EB] text-white shadow-xl shadow-blue-600/20">
              <BriefcaseIcon className="h-9 w-9" />
            </div>
          </div>

          <div>
            <span className="text-sm font-black uppercase tracking-wider text-[#2563EB]">Meet Your Trainer</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Mr. Atish Jain</h2>
            <p className="mt-2 text-sm font-bold text-slate-500">MCA, MSc (IT), MS (CS)</p>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600">
              With over a decade of industry experience, Mr. Atish Jain has mentored thousands of students to build successful careers in technology and professional roles.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Java Expert", "Python Expert", ".NET Expert", "Interview Mentor"].map((skill) => (
                <span key={skill} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-[#2563EB] shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Why choose AH Career?</h2>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-500">
              Practical learning, expert guidance, and a focused path from training to placement preparation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {whyAHCareer.map((item) => (
              <article key={item.title} className="flex gap-5 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100">
                  <CheckCircleIcon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0F172A] p-8 text-center text-white shadow-2xl shadow-blue-950/20 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.28),transparent_34%)]" />
            <div className="relative">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to start your journey?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-slate-300">
                Contact our counselors today for a free career roadmap and program guidance.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { icon: DevicePhoneMobileIcon, text: "9989241515" },
                  { icon: MapPinIcon, text: "Rajahmundry, AP" },
                  { icon: ChatBubbleLeftRightIcon, text: "WhatsApp Support" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                      <Icon className="mx-auto mb-3 h-6 w-6 text-[#38BDF8]" />
                      <p className="text-sm font-black">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="tel:9989241515" className="flex items-center justify-center gap-2 rounded-2xl bg-[#38BDF8] px-8 py-4 text-sm font-black text-[#0F172A] transition-all hover:-translate-y-0.5 hover:bg-white">
                  <PhoneIcon className="h-5 w-5" />
                  Call Now
                </a>
                <a href="https://wa.me/919989241515" className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#0F172A]">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
