import React, { useState, useEffect } from "react";
import { getAllApplications, updateApplicationStatus } from "../services/applicationService";
import { toast } from "react-toastify";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const data = await getAllApplications();
      if (data.success) {
        setApplications(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message || "Failed to fetch applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

    try {
      await updateApplicationStatus(id, { status });
      toast.success("Status updated successfully");
      fetchApplications();
    } catch (err) {
      toast.error("Status update failed: " + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#0b1257]">Job Applications</h2>
          <p className="text-sm text-gray-500">Review and manage candidates for career opportunities</p>
        </div>
        <button 
          onClick={fetchApplications}
          className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all text-lg"
          title="Refresh Data"
        >
          🔄
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Candidate</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Position</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Applied On</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <div className="w-10 h-10 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 font-medium">Loading candidate profiles...</p>
                  </td>
                </tr>
              ) : applications.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <div className="text-5xl mb-4 opacity-20">📄</div>
                    <p className="text-gray-500 font-medium text-lg">No job applications found yet.</p>
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">{app.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{app.email}</p>
                        <p className="text-xs font-bold text-orange-600 mt-1">{app.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-[#0b1257] bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                        {app.jobTitle}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <select 
                        value={app.status}
                        onChange={(e) => onStatusChange(app._id, e.target.value)}
                        className={`text-[10px] font-black px-2.5 py-1.5 rounded-lg border-none outline-none cursor-pointer uppercase tracking-widest ${
                          app.status === 'applied' ? 'bg-blue-100 text-blue-600' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                          'bg-green-100 text-green-600'
                        }`}
                      >
                        <option value="applied">Applied</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                        {new Date(app.createdAt).toLocaleDateString("en-IN", {
                          day: '2-digit', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {app.resume ? (
                        <a 
                          href={app.resume} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-blue-50 text-blue-700 font-black text-[10px] px-3 py-2 rounded-xl hover:bg-blue-100 transition-all uppercase tracking-widest"
                        >
                          View Resume
                        </a>
                      ) : (
                        <span className="text-gray-300 text-[10px] font-bold italic uppercase tracking-widest">No Resume</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
