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
    <section className="bg-[#0b1257] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 text-orange-400 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <TrophyIcon className="w-4 h-4 text-orange-400" />
          Trusted by Students Since 2013
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Launch Your Tech Career
          <br />
          <span className="text-orange-500">With Industry-Ready Programs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg mb-10 font-normal">
          ISO 9001:2015 Certified • Tally Certified Partner • MSME Registered
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base">
            <PhoneIcon className="w-5 h-5" />
            Talk To Expert
          </button>
          <button className="border border-white/40 hover:border-white/70 text-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base">
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
              className="border border-white/20 rounded-full px-4 py-2 text-[13px] text-gray-300 flex items-center gap-2"
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
              className="bg-white/5 border border-white/10 rounded-2xl py-7 px-4 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-extrabold text-orange-500 mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
