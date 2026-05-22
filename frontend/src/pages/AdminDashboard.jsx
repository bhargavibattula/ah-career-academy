import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  getAdminUsers,
  getAdminStats,
  deleteAdminUser,
  toggleAdminUserStatus,
} from "../services/authService";
import { toast } from "react-toastify";
import { 
  UsersIcon, 
  CheckCircleIcon, 
  SparklesIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon
} from "@heroicons/react/24/outline";

import AdminCareers from "../components/AdminCareers";
import AdminRegistrations from "../components/AdminRegistrations";
import AdminApplications from "../components/AdminApplications";
import AdminKidsRegistrations from "../components/AdminKidsRegistrations";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("users"); // 'users' or 'careers'
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, newThisMonth: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });
  const [actionLoading, setActionLoading] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [usersRes, statsRes] = await Promise.all([
        getAdminUsers({ page, search }),
        getAdminStats(),
      ]);
      setUsers(usersRes.data.users);
      setPagination(usersRes.data.pagination);
      setStats(statsRes.data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [fetchData]);

  const handleLogout = async () => {
    await logout();
    toast.info("Logged out successfully");
    navigate("/login", { replace: true });
  };

  const handleDelete = async (userId) => {
    setActionLoading(userId);
    try {
      await deleteAdminUser(userId);
      toast.success("User deleted successfully.");
      setDeleteConfirm(null);
      fetchData();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggle = async (userId) => {
    setActionLoading(userId);
    try {
      const res = await toggleAdminUserStatus(userId);
      toast.success(res.message);
      fetchData();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrashIcon className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-center text-lg mb-1">Delete User</h3>
            <p className="text-gray-500 text-sm text-center mb-5">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-800">{deleteConfirm.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                disabled={actionLoading === deleteConfirm.id}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg text-sm disabled:opacity-60 flex items-center justify-center gap-1"
              >
                {actionLoading === deleteConfirm.id ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-[#0F172A]">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Manage users and monitor platform activity</p>
          </div>

          <div className="flex bg-[#F8FAFC] border border-blue-100 p-1 rounded-xl w-fit overflow-x-auto max-w-full shadow-sm">
            <button
              onClick={() => setActiveTab("users")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "users" ? "bg-white text-[#2563EB] shadow-sm ring-1 ring-blue-100/50" : "text-gray-500 hover:text-[#0F172A]"}`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab("careers")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "careers" ? "bg-white text-[#2563EB] shadow-sm ring-1 ring-blue-100/50" : "text-gray-500 hover:text-[#0F172A]"}`}
            >
              Careers
            </button>
            <button
              onClick={() => setActiveTab("registrations")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "registrations" ? "bg-white text-[#2563EB] shadow-sm ring-1 ring-blue-100/50" : "text-gray-500 hover:text-[#0F172A]"}`}
            >
              Registrations
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "applications" ? "bg-white text-[#2563EB] shadow-sm ring-1 ring-blue-100/50" : "text-gray-500 hover:text-[#0F172A]"}`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab("kids")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "kids" ? "bg-white text-[#2563EB] shadow-sm ring-1 ring-blue-100/50" : "text-gray-500 hover:text-[#0F172A]"}`}
            >
              Kids Camp
            </button>
          </div>
        </div>

        {activeTab === "users" ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Users", value: stats.totalUsers, icon: <UsersIcon className="w-6 h-6" />, bg: "bg-blue-50 border-blue-100", val: "text-[#0F172A]" },
                { label: "Active Users", value: stats.activeUsers, icon: <CheckCircleIcon className="w-6 h-6" />, bg: "bg-green-50 border-green-100", val: "text-green-700" },
                { label: "New This Month", value: stats.newThisMonth, icon: <SparklesIcon className="w-6 h-6" />, bg: "bg-sky-50 border-sky-100", val: "text-[#38BDF8]" },
              ].map((s) => (
                <div key={s.label} className={`border rounded-2xl p-5 ${s.bg}`}>
                  <div className="mb-2 text-gray-500 opacity-60">{s.icon}</div>
                  <div className={`text-3xl font-bold ${s.val}`}>{s.value}</div>
                  <div className="text-sm text-gray-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Users Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Table Header */}
              <div className="px-5 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="font-black text-[#0F172A] text-base tracking-tight">Registered Users</h2>
                <div className="relative">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="pl-9 pr-4 py-2 border border-blue-100 rounded-lg text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] w-56 transition-shadow"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="py-16 text-center">
                    <div className="w-8 h-8 border-4 border-gray-200 border-t-[#2563EB] rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-gray-400 text-sm">Loading users...</p>
                  </div>
                ) : users.length === 0 ? (
                  <div className="py-16 text-center">
                    <MagnifyingGlassIcon className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">No users found.</p>
                  </div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3">User</th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3 hidden sm:table-cell">Role</th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3 hidden md:table-cell">Joined</th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3">Status</th>
                        <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {users.map((u) => (
                        <tr key={u._id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 bg-[#2563EB] shadow-sm shadow-blue-600/20 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                {u.name[0]?.toUpperCase()}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{u.name}</div>
                                <div className="text-xs text-gray-400">{u.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 hidden sm:table-cell">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${u.role === "admin"
                              ? "bg-[#0F172A] text-white"
                              : "bg-blue-50 text-[#2563EB] border border-blue-100"
                              }`}>
                              {u.role.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-xs text-gray-400 hidden md:table-cell">
                            {new Date(u.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${u.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${u.isActive ? "bg-green-500" : "bg-red-400"}`}></span>
                              {u.isActive ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            {u.role !== "admin" && (
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleToggle(u._id)}
                                  disabled={actionLoading === u._id}
                                  title={u.isActive ? "Deactivate" : "Activate"}
                                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors disabled:opacity-40"
                                >
                                  {actionLoading === u._id ? (
                                    <div className="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                  ) : (
                                    u.isActive ? <MoonIcon className="w-4 h-4 text-gray-400" /> : <SunIcon className="w-4 h-4 text-yellow-500" />
                                  )}
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm({ id: u._id, name: u.name })}
                                  title="Delete user"
                                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-red-400 hover:bg-red-50 transition-colors"
                                >
                                  <TrashIcon className="w-4 h-4 text-red-500" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-400">
                    Showing {users.length} of {pagination.total} users
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                    >
                      ← Prev
                    </button>
                    <span className="px-3 py-1.5 text-xs font-semibold bg-[#2563EB] shadow-sm text-white rounded-lg">
                      {page}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(pagination.pages, p + 1))}
                      disabled={page === pagination.pages}
                      className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : activeTab === "careers" ? (
          <AdminCareers />
        ) : activeTab === "registrations" ? (
          <AdminRegistrations />
        ) : activeTab === "applications" ? (
          <AdminApplications />
        ) : (
          <AdminKidsRegistrations />
        )}
      </div>
    </div>
  );
}
