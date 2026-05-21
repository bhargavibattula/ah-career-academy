import { 
  TrophyIcon, 
  UsersIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  PlayCircleIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#2563EB] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <TrophyIcon className="w-4 h-4 text-[#2563EB]" />
          Trusted by Students Since 2013
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Launch Your Tech Career
          <br />
          <span className="text-[#2563EB]">With Industry-Ready Programs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg mb-10 font-normal">
          ISO 9001:2015 Certified • Tally Certified Partner • MSME Registered
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base shadow-lg shadow-blue-600/20">
            <PhoneIcon className="w-5 h-5" />
            Talk To Expert
          </button>
          <button className="border border-[#2563EB]/30 hover:border-[#2563EB]/60 text-[#2563EB] bg-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base">
            <PlayCircleIcon className="w-5 h-5" />
            Get Free Demo Class
          </button>
        </div>

        {/* Stat Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            { icon: <StarIcon className="w-4 h-4" />, text: "Top 3 EdTech Institute" },
            { icon: <UsersIcon className="w-4 h-4" />, text: "1000+ Placements Annually" },
            { icon: <ClockIcon className="w-4 h-4" />, text: "Industry-Expert Trainers" },
            { icon: <ChatBubbleLeftRightIcon className="w-4 h-4" />, text: "24/7 Learning Support" },
          ].map((pill, idx) => (
            <span
              key={idx}
              className="border border-[#38BDF8]/30 bg-white rounded-full px-4 py-2 text-[13px] text-slate-700 flex items-center gap-2"
            >
              {pill.icon}
              {pill.text}
            </span>
          ))}
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "10+", label: "Years of Excellence" },
            { value: "25+", label: "Courses Offered" },
            { value: "100%", label: "Practical Training" },
            { value: "24/7", label: "Learning Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-blue-100 rounded-2xl py-7 px-4 hover:border-[#38BDF8]/60 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-extrabold text-[#2563EB] mb-1">{stat.value}</div>
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
