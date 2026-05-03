import { useState, useEffect } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "./jobs/JobCard";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [copySuccess, setCopySuccess] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const sharePage = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess("Link copied!");
    setTimeout(() => setCopySuccess(null), 3000);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <style>{`
        .hero-bg {
          background-color: #0d1b3e;
          background-image:
            radial-gradient(circle at 10% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 90% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.025) 40%, transparent 40%);
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-bg w-full flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center mb-8">
          <span className="bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">
            Hiring Now
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            SHAPE YOUR <span className="text-orange-500">CAREER</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">
            Join AH Career Academy of Skills. Explore open positions for trainers, creators, and professionals.
          </p>
        </div>
        
        {/* Search & Share */}
        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-4 px-4">
          <div className="relative flex-1 group">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-5 rounded-2xl border-0 shadow-2xl text-gray-900 text-base outline-none focus:ring-4 focus:ring-orange-400/30 transition-all"
              placeholder="Search by role, category, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button 
            onClick={sharePage}
            className="bg-white hover:bg-gray-50 text-[#0d1b3e] font-black px-10 py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95 border-2 border-transparent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684m0 2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {copySuccess || "Share Careers"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl font-black text-[#0b1257] tracking-tight">
              Open <span className="text-orange-500">Positions</span>
            </h2>
            <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-xs">
              Direct Apply via WhatsApp • No Login Required
            </p>
          </div>
          <div className="text-sm font-bold bg-[#0b1257] text-white px-4 py-2 rounded-xl">
            {filteredJobs.length} ROULES FOUND
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-xl"></div>
            <p className="text-[#0b1257] font-black uppercase tracking-widest text-sm">Discovering Opportunities...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center shadow-sm border border-gray-100">
            <div className="text-7xl mb-6">🔎</div>
            <h3 className="text-2xl font-black text-[#0b1257] mb-2">Nothing found</h3>
            <p className="text-gray-500 font-medium">Try broadening your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>

      {/* Quick Links Poster Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b1257] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -ml-20 -mb-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Can't find a <span className="text-orange-500">Perfect Match?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                Send us your resume directly. We are always looking for trainers in Python, Java, AWS, Digital Marketing, Tally, and more!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:Info@ahcareer.in" className="bg-white text-[#0b1257] font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
                  Email Resume
                </a>
                <a href="tel:9989241515" className="bg-orange-500 text-white font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
                  Call Support
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-black mb-6 text-orange-400 uppercase tracking-widest">Permanent Benefits</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3">✅ Salary: 1.8 LPA – 3 LPA</li>
                <li className="flex items-center gap-3">✅ Working Hours: 9 Hours</li>
                <li className="flex items-center gap-3">✅ Open for Freshers & Experienced</li>
                <li className="flex items-center gap-3">✅ Location: Rajahmundry (On-site)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
