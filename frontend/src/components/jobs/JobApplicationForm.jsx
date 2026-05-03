import React, { useState } from "react";
import { submitApplication } from "../../services/applicationService";

export default function JobApplicationForm({ job, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const data = await submitApplication({
        jobId: job._id,
        ...formData
      });

      if (data.success) {
        onSuccess();
      } else {
        setError(data.message || "Failed to submit application.");
      }
    } catch (err) {
      setError(err.message || "Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-[#0b1257] p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2 block">Direct Application</span>
          <h2 className="text-2xl font-black leading-tight">Join AH Career Academy</h2>
          <p className="text-white/60 text-xs mt-1">Applying for: <span className="text-white font-bold">{job.title}</span></p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 font-medium">
              ⚠️ {error}
            </div>
          )}

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Email Address</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Phone Number</label>
              <input 
                required
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="99892 41515"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Resume Link (Google Drive / LinkedIn)</label>
            <input 
              type="url" 
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="https://link-to-your-resume.com"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all shadow-sm"
            />
          </div>

          <button 
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-orange-200 active:scale-95 flex items-center justify-center gap-2 mt-4 text-sm uppercase tracking-widest"
          >
            {submitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Submit Application"
            )}
          </button>
          
          <p className="text-[10px] text-center text-gray-400 mt-4 px-2 italic">
            Your details will be shared with the AH Career HR team securely.
          </p>
        </form>
      </div>
    </div>
  );
}
