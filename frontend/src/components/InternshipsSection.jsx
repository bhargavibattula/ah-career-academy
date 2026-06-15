import { Briefcase, Code, Laptop, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function InternshipsSection() {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6">
            <Sparkles size={16} />
            <span>Real-World Experience</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-6 tracking-tight">
            Internship Programs
          </h3>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between academic learning and industry requirements. Gain hands-on experience and build a resume that stands out to top employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Short Term Internships */}
          <div className="group relative bg-slate-900/50 backdrop-blur-2xl border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10">
                <Code className="text-blue-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Short-Term</h4>
              <p className="text-slate-400 mb-8 min-h-[80px] leading-relaxed">
                Perfect for quick skill acquisition. 1-3 months of intensive, project-based learning in specific technologies.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "1-3 months duration",
                  "Technology specific focus",
                  "Mini-project completion",
                  "Certificate of internship"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 group/item">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5 group-hover/item:text-blue-400 transition-colors" size={20} />
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Long Term Internships (Highlighted) */}
          <div className="group relative bg-gradient-to-b from-blue-600/10 to-indigo-900/20 backdrop-blur-2xl border border-blue-500/30 rounded-[2rem] p-8 md:-translate-y-6 hover:-translate-y-8 transition-all duration-500 shadow-2xl shadow-blue-900/30 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-blue-500/20">
                  <Briefcase className="text-white" size={32} />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500 text-white shadow-lg shadow-blue-500/30 tracking-wider uppercase">
                  Most Popular
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">Long-Term</h4>
              <p className="text-slate-300 mb-8 min-h-[80px] leading-relaxed">
                Deep dive into enterprise development. 3-6 months working on live projects with industry standards.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "3-6 months duration",
                  "Live enterprise projects",
                  "Agile & Scrum methodology",
                  "Pre-placement offers (PPO)",
                  "Experience letter provided"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white group/item">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5 group-hover/item:text-blue-300 transition-colors" size={20} />
                    <span className="group-hover/item:text-blue-50 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/919908785687?text=Hi,%20I%20am%20interested%20in%20an%20internship" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Course Integrated */}
          <div className="group relative bg-slate-900/50 backdrop-blur-2xl border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/10">
                <Laptop className="text-purple-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Course-Integrated</h4>
              <p className="text-slate-400 mb-8 min-h-[80px] leading-relaxed">
                All our major courses come with built-in internship experience to ensure practical knowledge.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Included in course fee",
                  "Learn while doing",
                  "Capstone projects",
                  "Dual certification"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 group/item">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5 group-hover/item:text-purple-400 transition-colors" size={20} />
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
