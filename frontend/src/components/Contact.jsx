const contactMethods = [
  {
    icon: "💬",
    iconBg: "bg-green-500",
    title: "WhatsApp Chat",
    sub: "+91 9963486280",
    link: "Chat Now →",
    linkColor: "text-green-600",
  },
  {
    icon: "📞",
    iconBg: "bg-[#1e1b4b]",
    title: "Call Us",
    sub: "+91 9963486280",
    link: "Call Now →",
    linkColor: "text-[#1e1b4b]",
  },
  {
    icon: "✉️",
    iconBg: "bg-orange-500",
    title: "Email Us",
    sub: "info@qualitythought.in",
    link: "Send Mail →",
    linkColor: "text-orange-500",
  },
  {
    icon: "📅",
    iconBg: "bg-red-500",
    title: "Schedule Demo",
    sub: "Book a Free Demo Class",
    link: "Book Now →",
    linkColor: "text-orange-500",
  },
];

const socials = [
  { icon: "📘", name: "Facebook", followers: "4.4k+", color: "bg-blue-600" },
  { icon: "📸", name: "Instagram", followers: "17.7k+", color: "bg-pink-500" },
  { icon: "💬", name: "Whatsapp", followers: "4.6k+", color: "bg-green-500" },
  { icon: "💼", name: "LinkedIn", followers: "4k+", color: "bg-blue-700" },
  { icon: "▶️", name: "YouTube", followers: "229k+", color: "bg-red-600" },
  { icon: "✈️", name: "Telegram", followers: "1.7k+", color: "bg-sky-500" },
];

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1e1b4b] mb-2">
          Talk to Our <span className="text-orange-500">Experts</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Available 24/7 • Multiple Ways to Connect
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((m) => (
            <div key={m.title} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 ${m.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {m.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">{m.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{m.sub}</p>
              <a href="#" className={`${m.linkColor} text-sm font-semibold hover:underline`}>
                {m.link}
              </a>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <h2 className="text-center text-3xl font-bold text-[#1e1b4b] mb-2">
          Connect <span className="text-orange-500">With Us</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Follow us for updates, tips, and success stories
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href="#"
              className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:shadow-md transition-shadow flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 ${s.color} rounded-full flex items-center justify-center text-2xl`}>
                {s.icon}
              </div>
              <div className="font-bold text-gray-800 text-sm">{s.name}</div>
              <div className="text-orange-500 text-xs font-semibold">{s.followers}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
