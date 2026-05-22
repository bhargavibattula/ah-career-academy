import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJobDetails } from '../services/jobService';
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
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
      <div className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/careers" className="text-blue-400 font-bold text-sm flex items-center gap-2 mb-6 hover:text-blue-300 transition-colors">
            ← BACK TO CAREERS
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="bg-[#2563EB] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
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
              <div className="grid grid-cols-2 gap-3">
                <ShareButton jobId={job._id} jobSlug={job.slug} variant="dark" className="w-full" />
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out this job at AH Career: ${job.title}\n${window.location.href}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold py-3 px-4 rounded-xl hover:bg-[#25D366]/20 transition-all text-sm flex items-center justify-center gap-2 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Share
                </a>
              </div>
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
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Job Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {job.description || `Join our dynamic team at AH Career Academy. We are looking for a ${job.title} who is passionate about education and career development. This role is based in ${job.location} and offers a salary of ${job.salary}.`}
              </p>
            </section>

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-[#0F172A] mb-6">Key Responsibilities</h2>
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
                <h2 className="text-2xl font-black text-[#0F172A] mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer Apply */}
            <div className="pt-10 border-t border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Ready to shape the future?</h3>
              <p className="text-gray-500 mb-8">Click the button below to start your application via WhatsApp.</p>
              <WhatsAppButton jobTitle={job.title} className="w-full md:w-auto md:px-20 py-5 text-xl" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
