const footerLinks = {
  "AH CAREER": ["About Us", "Our Blog", "Pay Now", "Contact Us", "Reviews"],
  "TOP CATEGORIES": ["Full Stack Development", "AI & Machine Learning", "Data Science", "Digital Marketing", "Cybersecurity"],
  "TRENDING COURSES": ["Python", "Java", "Web Designing", "Advanced Excel", "Spoken English"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1257] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-white text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download Profile */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide">DOWNLOAD PROFILE</h4>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-4 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD COMPANY PROFILE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center gap-3">
            {/* Logo */}
            <div className="flex flex-col items-center flex-shrink-0 mb-4 bg-white px-6 py-3 rounded-xl shadow-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-[#0d1b3e] font-black text-3xl tracking-tight">AH CAREER</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-red-700 font-bold text-[11px] tracking-[0.15em] uppercase border-t-2 border-b-2 border-[#0d1b3e] py-0.5 my-0.5 text-center">Academy of Skills</span>
                <span className="text-[#0d1b3e] font-bold text-[9px] tracking-[0.2em] uppercase text-center border-b-2 border-[#0d1b3e] pb-0.5">ISO 9001 : 2015 Certified</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs text-center">
              All Rights Reserved AH Career Academy of Skills.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {["Sitemap", "FAQs", "Cancellation & Refunds", "Privacy Policy", "Terms & Conditions", "Feedback"].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-2">
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">{item}</a>
                  {i < arr.length - 1 && <span className="text-gray-600">|</span>}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs text-center">
              *Note: The certification names and logos are the trademarks of their respective owners.{" "}
              <a href="#" className="text-orange-400 hover:underline">View Disclaimer</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
