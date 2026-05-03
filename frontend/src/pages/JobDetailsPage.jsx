import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WhatsAppButton from '../components/jobs/WhatsAppButton';
import ShareButton from '../components/jobs/ShareButton';

export default function JobDetailsPage() {
  const { idOrSlug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${idOrSlug}`);
        setJob(response.data);
      } catch (err) {
        setError("Job not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [idOrSlug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error || !job) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="text-6xl mb-4">😕</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{error}</h2>
      <Link to="/careers" className="text-blue-600 font-bold hover:underline">Back to all jobs</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#0d1b3e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/careers" className="text-blue-400 font-bold text-sm flex items-center gap-2 mb-6 hover:text-blue-300 transition-colors">
            ← BACK TO CAREERS
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                {job.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm md:text-base font-bold opacity-80">
                <span className="flex items-center gap-2">📍 {job.location}</span>
                <span className="flex items-center gap-2">💰 {job.salary}</span>
                <span className="flex items-center gap-2">💼 {job.jobType}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <WhatsAppButton jobTitle={job.title} className="w-full md:px-12 py-4" />
              <ShareButton jobId={job._id} jobSlug={job.slug} className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid gap-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-black text-[#0b1257] mb-4">Job Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {job.description || `Join our dynamic team at AH Career Academy. We are looking for a ${job.title} who is passionate about education and career development. This role is based in ${job.location} and offers a salary of ${job.salary}.`}
              </p>
            </section>

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-[#0b1257] mb-6">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-700 text-lg">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requirements */}
            {job.requirements?.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-[#0b1257] mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer Apply */}
            <div className="pt-10 border-t border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-[#0b1257] mb-2">Ready to shape the future?</h3>
              <p className="text-gray-500 mb-8">Click the button below to start your application via WhatsApp.</p>
              <WhatsAppButton jobTitle={job.title} className="w-full md:w-auto md:px-20 py-5 text-xl" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
