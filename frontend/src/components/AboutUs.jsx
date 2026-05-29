import SEO from "./SEO";
import {
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const techSkills = ["C, C++, Java, Python", "SQL", "Full Stack Development", "Web Designing", "AI & Machine Learning", "Data Science"];
const businessSkills = ["MS Office / Microsoft 365", "Advanced Excel & Tally Accounting", "Digital Marketing", "Spoken English", "Cybersecurity"];
const features = ["Practical Projects", "Corporate Workshops", "Online & Offline Classes", "Experienced Faculty", "Certification Programs", "Personalized Mentoring"];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SEO 
        title="About Us"
        description="Learn about AH Career Academy's 25-year history of technical education, placement achievements, and certified training infrastructure."
        keywords="about ah career academy, software training rajahmundry, it institute"
      />
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_88%_35%,rgba(37,99,235,0.25),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
            <SparklesIcon className="h-4 w-4" />
            About AH Career
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Practical skill training for modern careers.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
                Since 2013, AH Career Academy has helped students, graduates, and professionals build job-oriented IT and workplace skills.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                ["2013", "Founded"],
                ["25+", "Courses"],
                ["1000+", "Placements yearly"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-2xl font-black text-[#38BDF8]">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <article className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100">
              <AcademicCapIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl font-black">Our Story</h2>
            <p className="mt-4 text-base font-medium leading-8 text-slate-600">
              AH Career Academy of Skills is a computer training institute and skill development center located in Rajahmundry, Andhra Pradesh. We focus on equipping students, fresh graduates, and working professionals with practical, job-oriented skills needed in today&apos;s tech industry.
            </p>
            <p className="mt-4 text-base font-medium leading-8 text-slate-600">
              Our training model combines expert mentoring, real-world projects, and structured curriculum to bridge the gap between academic learning and industry expectations.
            </p>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: ComputerDesktopIcon, title: "Programming & Tech", items: techSkills },
              { icon: ChartBarIcon, title: "Business & Workplace Skills", items: businessSkills },
            ].map((block) => {
              const Icon = block.icon;
              return (
                <article key={block.title} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black">{block.title}</h3>
                  <div className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2563EB]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <article className="rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-2xl shadow-blue-950/20">
            <h2 className="text-3xl font-black">Why Choose Us?</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-300">
              We combine practical learning, mentorship, and career support into one focused training experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {features.map((feature) => (
                <span key={feature} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                  {feature}
                </span>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">Quick Facts</h3>
            <div className="mt-5 space-y-4">
              {[
                ["Founded", "2013"],
                ["Industry", "Education & Skills"],
                ["Company Size", "11-50 employees"],
                ["Certifications", "ISO 9001:2015, Tally Certified, MSME Registered"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#F8FAFC] p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
                  <div className="mt-1 text-sm font-black text-[#0F172A]">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">Contact Us</h3>
            <div className="mt-5 space-y-4 text-sm font-medium text-slate-600">
              <div className="flex gap-3">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 text-[#2563EB]" />
                <p>Danavaipeta, Near UCO Bank, T.T.D Road, Vadrevu Buildings, Rajahmundry - 533103</p>
              </div>
              <div className="flex gap-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0 text-[#2563EB]" />
                <p>9989241515<br />0883-2474088</p>
              </div>
              <div className="flex gap-3">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0 text-[#2563EB]" />
                <p>ahcareerpvtltd@gmail.com</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                ["f", "https://www.facebook.com/share/18nvUvNp8m/"],
                ["Ig", "https://www.instagram.com/ah_career_rajahmundry"],
                ["in", "https://www.linkedin.com/company/ahcareer/"],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-[#2563EB] transition-all hover:bg-[#2563EB] hover:text-white">
                  {label}
                </a>
              ))}
              <a href="http://ahcareer.in" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] transition-all hover:bg-[#2563EB] hover:text-white">
                <GlobeAltIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-6 text-white shadow-xl shadow-blue-600/20">
            <ShieldCheckIcon className="h-10 w-10" />
            <h3 className="mt-4 text-xl font-black">Certified Learning Experience</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-white/85">
              Quality-focused training with practical projects, structured guidance, and career-ready outcomes.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
