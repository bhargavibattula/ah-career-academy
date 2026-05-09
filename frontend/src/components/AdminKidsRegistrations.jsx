import React, { useState, useEffect, useCallback } from "react";
import { getAllKidsRegistrations, updateKidsRegistrationStatus } from "../services/kidsRegistrationService";
import { toast } from "react-toastify";
import { 
  ArrowPathIcon, 
  ChartBarIcon, 
  InboxIcon, 
  TrashIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function AdminKidsRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllKidsRegistrations();
      if (data.success) {
        setRegistrations(data.data);
      }
    } catch (err) {
      toast.error(err.message || "Failed to fetch kids registrations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const onStatusUpdate = async (id, newStatus) => {
    try {
      const data = await updateKidsRegistrationStatus(id, { status: newStatus });
      if (data.success) {
        toast.success("Status updated successfully");
        fetchRegistrations();
      }
    } catch (err) {
      toast.error("Update failed: " + err.message);
    }
  };

  const exportToExcel = () => {
    if (registrations.length === 0) return;
    const headers = ["Student Name", "Parent Name", "Course", "Age", "Phone", "Email", "Status", "Date", "Message"];
    const rows = registrations.map(r => [
      r.studentName,
      r.parentName,
      r.course,
      r.age,
      r.phone,
      r.email,
      r.status,
      new Date(r.createdAt).toLocaleDateString(),
      r.message ? r.message.replace(/,/g, ";").replace(/\n/g, " ") : ""
    ]);
    const BOM = "\uFEFF";
    const csvContent = BOM + [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `kids_camp_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#0b1257]">Kids Camp Registrations</h2>
          <p className="text-sm text-gray-500">Manage summer camp signups and student details</p>
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
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Student & Parent</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Course & Age</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Info</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 font-medium">Fetching real-time data...</p>
                  </td>
                </tr>
              ) : registrations.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <InboxIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium text-lg">No kids registrations found.</p>
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">{reg.studentName}</p>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Parent: {reg.parentName}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-[#0b1257] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 w-fit">
                          {reg.course}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 ml-1">Age: {reg.age} Yrs</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 font-bold">{reg.phone}</p>
                      <p className="text-xs text-gray-500">{reg.email}</p>
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
