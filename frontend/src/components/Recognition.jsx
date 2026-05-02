const achievements = [
  "Top 6 EdTech Institute in India",
  "Featured in Telangana Today",
  "Industry Partner with 500+ Companies",
  "Trusted by 100+ Corporate Clients",
];

const media = ["Economic Times", "Times of India", "The Hindu", "Tech News", "India Today"];

export default function Recognition() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-orange-500 text-sm font-semibold border border-orange-200 bg-orange-50 px-4 py-1 rounded-full">
            Recognition
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1e1b4b] mb-2">
          Recognized <span className="text-orange-500">Excellence</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          Our achievements and industry recognition over 13+ years
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Achievements */}
          <div className="space-y-3">
            {achievements.map((a) => (
              <div key={a} className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-4 hover:border-orange-200 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 text-xl">🏆</span>
                </div>
                <span className="text-gray-800 font-semibold text-sm">{a}</span>
              </div>
            ))}

            {/* Featured In */}
            <div className="border border-orange-100 bg-orange-50/50 rounded-xl px-4 py-4">
              <div className="text-gray-600 font-semibold text-sm mb-2">Featured In</div>
              <div className="flex flex-wrap gap-2">
                {media.map((m) => (
                  <span key={m} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Award Card */}
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-600 text-sm mb-1">We Are Honored as</p>
              <h3 className="text-[#1e1b4b] font-extrabold text-xl mb-0.5">Best EdTech Company 2025</h3>
              <p className="text-gray-500 text-sm mb-4">by Zee Telugu</p>
              <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <div className="text-center px-4">
                  <div className="text-6xl mb-3">🏆</div>
                  <div className="text-orange-700 font-bold text-base">Award Ceremony</div>
                  <div className="text-orange-600 text-sm">Best EdTech Company 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-3 text-left">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  🥇
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">Awarded for</div>
                  <div className="text-gray-600 text-sm">Shaping the Future of Tech Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
