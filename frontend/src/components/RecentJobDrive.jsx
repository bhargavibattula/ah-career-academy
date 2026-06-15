import { Users, Briefcase, Building } from 'lucide-react';
import ScrollVelocity from './ScrollVelocity';

export default function RecentJobDrive() {
  const companies = [
    "Tech Mahindra", "Cognizant", "TCS", "Infosys", 
    "Wipro", "HCL", "Accenture", "Capgemini", 
    "IBM", "Deloitte", "L&T", "Mindtree", 
    "Mphasis", "Hexaware", "Zensar", "CGI", 
    "Virtusa", "Genpact"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50 rounded-tr-full opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">
            Recent Success
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Mega Job Drive Q4
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We recently conducted a massive recruitment drive connecting our talented students with top industry leaders, resulting in record-breaking placements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Users size={32} />
            </div>
            <h4 className="text-5xl font-black mb-2">256+</h4>
            <p className="text-blue-100 font-medium text-lg">Members Placed</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-indigo-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Building size={32} />
            </div>
            <h4 className="text-5xl font-black mb-2">18</h4>
            <p className="text-indigo-100 font-medium text-lg">Partner Companies</p>
          </div>

          <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-3xl p-8 text-white shadow-xl shadow-sky-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Briefcase size={32} />
            </div>
            <h4 className="text-5xl font-black mb-2">Top</h4>
            <p className="text-sky-100 font-medium text-lg">Tier Opportunities</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-slate-800 mb-2">Our Hiring Partners</h4>
          <p className="text-slate-500">18 top companies participated in our recent drive</p>
        </div>
      </div>

      <div className="relative z-20 flex justify-center py-4 bg-slate-50/50 border-y border-slate-100">
        <ScrollVelocity
          texts={[
            <div className="flex items-center gap-6 py-2">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-sm border border-slate-200/50 hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <span className="font-bold text-slate-800 tracking-tight text-xl select-none">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          ]}
          velocity={-60}
          numCopies={2}
          parallaxClassName="parallax w-full"
          scrollerClassName="scroller flex items-center justify-start"
        />
      </div>
    </section>
  );
}
