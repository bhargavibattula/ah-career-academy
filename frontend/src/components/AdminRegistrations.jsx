import React, { useState, useEffect, useCallback } from "react";
import { getStoredToken } from "../services/authService";

export default function AdminRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterCourse, setFilterCourse] = useState("");

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    try {
      const token = getStoredToken();
      const url = filterCourse 
        ? `http://localhost:5000/api/registrations?courseId=${filterCourse}`
        : "http://localhost:5000/api/registrations";
        
      const response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setRegistrations(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch registrations");
    } finally {
      setLoading(false);
    }
  }, [filterCourse]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const exportToCSV = () => {
    if (registrations.length === 0) return;

    // Headers
    const headers = ["Course", "Name", "Email", "Phone", "City", "Status", "Date", "Notes"];
    
    // Rows
    const rows = registrations.map(r => [
      r.courseTitle,
      r.name,
      r.email,
      r.phone,
      r.city,
      r.status,
      new Date(r.createdAt).toLocaleDateString(),
      r.notes.replace(/,/g, ";") // Replace commas to not break CSV
    ]);

    // Construct content
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const token = getStoredToken();
      const response = await fetch(`http://localhost:5000/api/registrations/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        fetchRegistrations();
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#0b1257]">Course Registrations</h2>
          <p className="text-sm text-gray-500">View and manage student inquiries</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={exportToCSV}
            disabled={registrations.length === 0}
            className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
          >
            📊 Export CSV
          </button>
          <button 
            onClick={fetchRegistrations}
            className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            🔄
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Student Info</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Course Interested</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">City</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <div className="w-8 h-8 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 text-sm">Loading registrations...</p>
                  </td>
                </tr>
              ) : registrations.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <div className="text-4xl mb-4">📥</div>
                    <p className="text-gray-500 font-medium">No registrations found yet.</p>
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-gray-900">{reg.name}</p>
                        <p className="text-xs text-gray-500">{reg.email}</p>
                        <p className="text-xs font-medium text-blue-600">{reg.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-[#0b1257] bg-blue-50 px-3 py-1 rounded-lg">
                        {reg.courseTitle}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 font-medium">{reg.city}</p>
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={reg.status}
                        onChange={(e) => handleStatusUpdate(reg._id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer ${
                          reg.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                          reg.status === 'contacted' ? 'bg-blue-100 text-blue-600' :
                          reg.status === 'enrolled' ? 'bg-green-100 text-green-600' :
                          'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="enrolled">Enrolled</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-gray-400 font-medium">
                        {new Date(reg.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        title="View Notes"
                        onClick={() => reg.notes && alert(`Notes: ${reg.notes}`)}
                        disabled={!reg.notes}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          reg.notes ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-gray-50 text-gray-300'
                        }`}
                      >
                        📝
                      </button>
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
