import { useState, useEffect } from "react";
import { getJobs, createJob, updateJob, deleteJob } from "../services/jobService";

export default function AdminCareers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Software & Programming",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    salary: "1.8 LPA – 3 LPA",
    experience: "Freshers / Experienced",
    jobType: "Full-time",
    location: "Rajahmundry",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (job = null) => {
    if (job) {
      setEditingJob(job);
      setFormData({
        ...job,
        responsibilities: job.responsibilities?.join("\n") || "",
        requirements: job.requirements?.join("\n") || "",
        skills: job.skills?.join(", ") || "",
      });
    } else {
      setEditingJob(null);
      setFormData({
        title: "",
        category: "Software & Programming",
        description: "",
        responsibilities: "",
        requirements: "",
        skills: "",
        salary: "1.8 LPA – 3 LPA",
        experience: "Freshers / Experienced",
        jobType: "Full-time",
        location: "Rajahmundry",
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      responsibilities: formData.responsibilities.split("\n").map(s => s.trim()).filter(s => s),
      requirements: formData.requirements.split("\n").map(s => s.trim()).filter(s => s),
      skills: formData.skills.split(",").map(s => s.trim()).filter(s => s),
    };

    try {
      if (editingJob) {
        await updateJob(editingJob._id, payload);
      } else {
        await createJob(payload);
      }
      setShowModal(false);
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-[#0b1257] p-6 rounded-3xl text-white shadow-xl">
        <div>
          <h2 className="text-2xl font-black">Careers Management</h2>
          <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Post and manage job openings</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl text-sm font-black transition-all active:scale-95 shadow-lg"
        >
          + ADD NEW POSTING
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 text-left">
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Job Information</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              <tr><td colSpan="3" className="py-20 text-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div></td></tr>
            ) : jobs.length === 0 ? (
              <tr><td colSpan="3" className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest">No jobs posted yet</td></tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="text-lg font-black text-[#0b1257] group-hover:text-blue-600 transition-colors">{job.title}</div>
                    <div className="flex gap-4 text-xs font-bold text-gray-400 mt-1 uppercase tracking-tighter">
                      <span>💰 {job.salary}</span>
                      <span>📍 {job.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                      {job.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleOpenModal(job)} className="p-3 hover:bg-blue-100 rounded-xl text-blue-600 transition-all active:scale-90 shadow-sm border border-gray-100 bg-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button onClick={() => { if(window.confirm("Delete this?")) deleteJob(job._id).then(fetchJobs) }} className="p-3 hover:bg-red-100 rounded-xl text-red-600 transition-all active:scale-90 shadow-sm border border-gray-100 bg-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#0d1b3e]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl p-8 overflow-y-auto max-h-[90vh] shadow-2xl">
            <h3 className="text-3xl font-black text-[#0b1257] mb-8">{editingJob ? "Update Posting" : "New Opportunity"}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Job Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 transition-all font-bold" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Category</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 transition-all font-bold"
                  >
                    <option>Software & Programming</option>
                    <option>Cloud & Advanced Technologies</option>
                    <option>Design & Marketing</option>
                    <option>Accounts & Office Tools</option>
                    <option>Additional Skills</option>
                    <option>Creative & Management</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Short Description</label>
                <textarea 
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 transition-all font-bold h-24 resize-none"
                  placeholder="Summarize the role in 2 sentences..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Responsibilities (One per line)</label>
                  <textarea 
                    value={formData.responsibilities}
                    onChange={e => setFormData({...formData, responsibilities: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-xs outline-none focus:border-orange-500 transition-all font-bold h-32"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Requirements (One per line)</label>
                  <textarea 
                    value={formData.requirements}
                    onChange={e => setFormData({...formData, requirements: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-xs outline-none focus:border-orange-500 transition-all font-bold h-32"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Job Type</label>
                  <select 
                    value={formData.jobType}
                    onChange={e => setFormData({...formData, jobType: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-xs outline-none focus:border-orange-500 font-bold"
                  >
                    <option>Full-time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                    <option>Part-time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Salary</label>
                  <input 
                    type="text" 
                    value={formData.salary}
                    onChange={e => setFormData({...formData, salary: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-xs outline-none focus:border-orange-500 font-bold" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Experience</label>
                  <input 
                    type="text" 
                    value={formData.experience}
                    onChange={e => setFormData({...formData, experience: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-xs outline-none focus:border-orange-500 font-bold" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Location</label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-xs outline-none focus:border-orange-500 font-bold" 
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-2xl font-black text-sm hover:bg-gray-200 transition-colors">Discard</button>
                <button type="submit" className="flex-1 bg-[#0b1257] text-white py-4 rounded-2xl font-black text-sm hover:bg-blue-900 transition-all shadow-xl active:scale-95">Publish Opportunity</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
