import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const contactMethods = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "WhatsApp Chat",
    sub: "+91 9989241515",
    action: "Chat Now",
    href: "https://wa.me/919989241515",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    sub: "0883-2474088",
    action: "Call Now",
    href: "tel:0883-2474088",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    sub: "ahcareerpvtltd@gmail.com",
    action: "Send Mail",
    href: "mailto:ahcareerpvtltd@gmail.com",
  },
  {
    icon: CalendarDaysIcon,
    title: "Schedule Demo",
    sub: "Book a Free Demo Class",
    action: "Book Now",
    href: "/contact",
  },
];

const socials = [
  { icon: "f", name: "Facebook", followers: "4.4k+", url: "https://www.facebook.com/share/18nvUvNp8m/" },
  { icon: "Ig", name: "Instagram", followers: "17.7k+", url: "https://www.instagram.com/ah_career_rajahmundry" },
  { icon: "in", name: "LinkedIn", followers: "4k+", url: "https://www.linkedin.com/company/ahcareer/" },
  { icon: <GlobeAltIcon className="h-5 w-5" />, name: "Website", followers: "Official", url: "http://ahcareer.in" },
];

export default function Contact() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-blue-950/20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.28),transparent_34%)]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
                  <SparklesIcon className="h-4 w-4" />
                  Talk to Experts
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  Need help choosing the right course?
                </h2>
                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                  Speak with our counselors for course guidance, demo class details, batch timing, and career roadmap support.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    ["24/7", "Learning support"],
                    ["Free", "Career roadmap"],
                    ["Live", "Demo guidance"],
                    ["Fast", "Counselor callback"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                      <div className="text-2xl font-black text-[#38BDF8]">{value}</div>
                      <div className="mt-1 text-xs font-semibold text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-5 sm:p-6 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-xl hover:shadow-blue-900/10"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-black text-[#0F172A]">{method.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-500">{method.sub}</p>
                      <div className="mt-4 text-sm font-black text-[#2563EB]">{method.action}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-3xl font-black text-[#0F172A]">
            Connect <span className="text-[#2563EB]">With Us</span>
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Follow us for updates, tips, and success stories.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-blue-100 bg-[#F8FAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:bg-white hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#2563EB] ring-1 ring-blue-100 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                {social.icon}
              </div>
              <div className="mt-3 text-sm font-black text-[#0F172A]">{social.name}</div>
              <div className="mt-1 text-xs font-bold text-[#2563EB]">{social.followers}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
