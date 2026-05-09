import { 
  BuildingLibraryIcon, 
  ComputerDesktopIcon, 
  BuildingOfficeIcon, 
  BriefcaseIcon, 
  RocketLaunchIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BuildingLibraryIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-[#1e1b4b]",
    title: "Classroom Training",
    desc: "In-person immersive learning in our Rajahmundry center with hands-on labs and direct mentor interaction.",
  },
  {
    icon: <ComputerDesktopIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-orange-500",
    title: "Online Training",
    desc: "Learn from anywhere, anytime with live interactive sessions, recorded content, and 24/7 support.",
  },
  {
    icon: <BuildingOfficeIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-green-600",
    title: "Corporate Training",
    desc: "Customized enterprise solutions for teams. Upskill your workforce with tailored programs.",
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-purple-600",
    title: "Internship Programs",
    desc: "3, 6, 9, or 12-month hands-on project experience with real-world industry exposure.",
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-red-500",
    title: "Skill-to-Job",
    desc: "Already trained elsewhere? Upskill with us and get placed in top companies.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 text-white" />,
    iconBg: "bg-cyan-500",
    title: "Career Guidance",
    desc: "1-on-1 mentorship, resume building, interview prep, and career path planning.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-gray-500 text-sm font-semibold border border-gray-300 bg-white px-4 py-1 rounded-full">
            Our Services
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1e1b4b] mb-2">
          Complete <span className="text-orange-500">Learning Ecosystem</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Everything you need for a successful tech career, all under one roof
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                {s.icon}
              </div>
              <h3 className="font-bold text-[#1e1b4b] text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
