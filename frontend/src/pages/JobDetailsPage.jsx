import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJobDetails } from '../services/jobService';
import WhatsAppButton from '../components/jobs/WhatsAppButton';
import ShareButton from '../components/jobs/ShareButton';
import SEO from '../components/SEO';

export default function JobDetailsPage() {
  const { idOrSlug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobDetails(idOrSlug);
        setJob(data);
      } catch (err) {
        setError("Job not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [idOrSlug]);

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium text-sm animate-pulse">Loading career details...</p>
      </div>
    </div>
  );

  if (error || !job) return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm">🔍</div>
      <h2 className="text-2xl font-black text-slate-800 mb-2">{error || "Job Listing Not Found"}</h2>
      <p className="text-slate-500 mb-6 max-w-sm">The job listing you are looking for might have been closed, removed, or the link is incorrect.</p>
      <Link 
        to="/careers" 
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
      >
        ← Back to Careers Portal
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans text-slate-700 antialiased">
      <SEO 
        title={job.title}
        description={`${job.title} job opening at AH Career Academy. Category: ${job.category}. Location: ${job.location}.`}
        keywords={`${job.title}, software jobs, jobs in Rajahmundry, career portal`}
      />
      
      {/* Premium Hero Header Banner - Clean Layout, No Overlap */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-28 pb-16 px-4 md:px-8 border-b border-slate-800">
        {/* Subtle Glow and Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/careers" 
            className="inline-flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6 hover:text-indigo-300 transition-colors group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Careers Portal
          </Link>
          
          <div className="flex flex-col gap-3">
            <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider w-fit">
              {job.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2] text-white max-w-4xl mt-1">
              {job.title}
            </h1>
            
            {/* Quick Metadata Row */}
            <div className="flex flex-wrap gap-3.5 text-xs md:text-sm font-semibold text-slate-300 mt-4">
              <span className="inline-flex items-center gap-2 bg-slate-800/40 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300">
                <svg className="w-4.5 h-4.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </span>
              <span className="inline-flex items-center gap-2 bg-slate-800/40 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300">
                <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.salary}
              </span>
              <span className="inline-flex items-center gap-2 bg-slate-800/40 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300">
                <svg className="w-4.5 h-4.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {job.jobType}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Placed cleanly below header */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column (Job Info Cards) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60">
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-5 flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                Job Overview & Role
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {job.description || `Join our dynamic team at AH Career Academy. We are looking for a dedicated ${job.title} to help drive growth and mentor aspiring students. This position requires someone passionate about education, mentorship, and career excellence. The ideal candidate will be based at our ${job.location} office.`}
              </p>
            </div>

            {/* Responsibilities Card */}
            {job.responsibilities?.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60">
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                  Key Responsibilities
                </h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-slate-600 text-[15px] md:text-base leading-relaxed">
                      <span className="w-6 h-6 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements Card */}
            {job.requirements?.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60">
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                  Qualifications & Requirements
                </h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-slate-600 text-[15px] md:text-base leading-relaxed">
                      <span className="w-2.5 h-2.5 bg-indigo-600/10 border-2 border-indigo-600 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills & Technologies Card */}
            {job.skills?.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60">
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-5 flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {job.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-50 border border-slate-200 text-slate-600 font-semibold px-4 py-2 rounded-xl text-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Sidebar Column */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Quick Actions Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 space-y-6">
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-1">Quick Job Summary</h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Specifications</p>
              </div>
              
              {/* Job Facts List */}
              <div className="divide-y divide-slate-100 text-sm">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-400 font-semibold flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Job Type
                  </span>
                  <span className="font-bold text-slate-700">{job.jobType}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-400 font-semibold flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hours
                  </span>
                  <span className="font-bold text-slate-700">{job.workingHours || "9 Hours"}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-400 font-semibold flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Experience
                  </span>
                  <span className="font-bold text-slate-700">{job.experience}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-400 font-semibold flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </span>
                  <span className="font-bold text-slate-700">{job.location}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-400 font-semibold flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Salary
                  </span>
                  <span className="font-bold text-slate-700">{job.salary}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <WhatsAppButton 
                  jobTitle={job.title} 
                  phoneNumber={job.whatsappNumber || "9989241515"}
                  className="w-full !bg-indigo-600 hover:!bg-indigo-700 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-600/10 active:scale-95 transition-all text-base border border-transparent"
                />
                
                <div className="grid grid-cols-2 gap-3">
                  <ShareButton jobId={job._id} jobSlug={job.slug} variant="light" className="w-full text-xs py-3 px-4 font-bold border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition-all hover:border-slate-300" />
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out this career opening at AH Career Academy:\n${job.title} (${job.location})\n${window.location.href}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-200 bg-white text-slate-700 font-bold py-3 px-4 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all text-xs flex items-center justify-center gap-2 active:scale-95"
                  >
                    <svg className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.249 8.477 3.517 2.266 2.268 3.512 5.29 3.51 8.498-.004 6.544-5.34 11.881-11.952 11.881-2.006 0-3.978-.506-5.722-1.472L0 24zm6.59-4.846c1.62.962 3.238 1.455 4.881 1.456 5.37 0 9.742-4.37 9.745-9.743.001-2.602-1.012-5.05-2.853-6.89C16.53 2.138 14.083.993 12.01.993c-5.372 0-9.743 4.37-9.746 9.745-.001 2.052.536 4.053 1.551 5.795l-.995 3.633 3.737-.98l.506.309z" />
                    </svg>
                    Share
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Note Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 text-center text-xs text-slate-400 leading-relaxed">
              💡 <strong>Note:</strong> All applications are reviewed directly by the AH Career Academy recruiting team. You will be redirected to WhatsApp to submit your resume.
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
