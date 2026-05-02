export default function Hero() {
  return (
    <section className="bg-[#0b1257] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 text-orange-400 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="text-orange-400">🏅</span>
          Trusted by 150k+ Students Since 2010
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Launch Your Tech Career
          <br />
          <span className="text-orange-500">With Industry-Ready Programs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg mb-10 font-normal">
          100+ Industry-Focused Programs • 50000+ Success Stories • 16+ Years of Excellence
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base">
            Talk To Expert
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </button>
          <button className="border border-white/40 hover:border-white/70 text-white font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base">
            Get Free Demo Class
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Stat Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            { icon: "🏆", text: "Top 3 EdTech Institute" },
            { icon: "👥", text: "1000+ Placements Annually" },
            { icon: "⏱️", text: "Industry-Expert Trainers" },
            { icon: "🎧", text: "24/7 Learning Support" },
          ].map((pill) => (
            <span
              key={pill.text}
              className="border border-white/20 rounded-full px-4 py-2 text-[13px] text-gray-300 flex items-center gap-2"
            >
              <span>{pill.icon}</span>
              {pill.text}
            </span>
          ))}
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "16+", label: "Years of Excellence" },
            { value: "100+", label: "Courses Offered" },
            { value: "1000+", label: "Annual Placements" },
            { value: "150K+", label: "Trained Students" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 border border-white/10 rounded-2xl py-7 px-4"
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
