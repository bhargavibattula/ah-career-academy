const footerLinks = {
  "QUALITY THOUGHT": ["About Us", "Our Blog", "Pay Now", "Contact Us", "Reviews"],
  "TOP CATEGORIES": ["DevOps Engineer", "GCP Cloud Data Engineer", "Digital Marketing", "Python with Gen AI", "Gen AI Development"],
  "TRENDING COURSES": ["Data Science", "Medical Coding", "DevOps", "Multi-Cloud", "Cybersecurity"],
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-base">Q</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-none">Quality</div>
                <div className="font-bold text-white text-sm leading-none">Thought</div>
              </div>
            </div>

            <p className="text-gray-400 text-xs text-center">
              All Rights Reserved Quality Thought Infosystems India Pvt. Ltd.
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
