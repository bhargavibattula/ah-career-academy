import React, { useState, useEffect, useCallback } from "react";
import { getAllRegistrations, updateRegistrationStatus } from "../services/registrationService";
import { toast } from "react-toastify";
import { 
  ArrowPathIcon, 
  ChartBarIcon, 
  InboxIcon, 
  PencilSquareIcon 
} from "@heroicons/react/24/outline";

export default function AdminRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCourse, setFilterCourse] = useState("");

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllRegistrations(filterCourse);
      if (data.success) {
        setRegistrations(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message || "Failed to fetch registrations");
    } finally {
      setLoading(false);
    }
  }, [filterCourse]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const exportToExcel = () => {
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
      r.notes ? r.notes.replace(/,/g, ";").replace(/\n/g, " ") : ""
    ]);

    // Construct CSV content (best for Excel compatibility without extra libs)
    // Adding BOM for Excel to recognize UTF-8
    const BOM = "\uFEFF";
    const csvContent = BOM + [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(",")) // Quote all cells to handle commas
    ].join("\r\n");

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ah_career_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onStatusUpdate = async (id, newStatus) => {
    try {
      const data = await updateRegistrationStatus(id, { status: newStatus });
      if (data.success) {
        toast.success("Status updated successfully");
        fetchRegistrations();
      }
    } catch (err) {
      toast.error("Update failed: " + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#0b1257]">Course Registrations</h2>
          <p className="text-sm text-gray-500">View and manage student inquiries from the database</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={exportToExcel}
            disabled={registrations.length === 0}
            className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200"
          >
            <ChartBarIcon className="w-5 h-5" />
            Export to Excel
          </button>
          <button 
            onClick={fetchRegistrations}
            className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all text-gray-600"
            title="Refresh Data"
          >
            <ArrowPathIcon className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Student Info</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Course Interested</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">City</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 font-medium">Fetching real-time data...</p>
                  </td>
                </tr>
              ) : registrations.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <InboxIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium text-lg">No registrations found in the database.</p>
                    <p className="text-gray-400 text-sm mt-1">New registrations will appear here automatically.</p>
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">{reg.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{reg.email}</p>
                        <p className="text-xs font-bold text-blue-600 mt-1">{reg.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-[#0b1257] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 inline-block">
                        {reg.courseTitle}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 font-medium">{reg.city}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <select 
                        value={reg.status}
                        onChange={(e) => onStatusUpdate(reg._id, e.target.value)}
                        className={`text-[10px] font-black px-2 py-1.5 rounded-lg border-none outline-none cursor-pointer uppercase tracking-widest transition-colors ${
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
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                        {new Date(reg.createdAt).toLocaleDateString("en-IN", {
                          day: '2-digit', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        title={reg.notes ? "View Notes" : "No Notes"}
                        onClick={() => reg.notes && toast.info(`Notes: ${reg.notes}`, { autoClose: false })}
                        disabled={!reg.notes}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                          reg.notes ? 'bg-white border border-blue-100 text-blue-600 hover:shadow-md' : 'bg-gray-50 text-gray-300 border border-transparent cursor-not-allowed'
                        }`}
                      >
                        <PencilSquareIcon className="w-5 h-5" />
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
