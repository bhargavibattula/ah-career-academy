import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { getMyRegistrations } from "../services/registrationService";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [myRegs, setMyRegs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyRegs = async () => {
      if (!user?.email) { setLoading(false); return; }
      try {
        const res = await getMyRegistrations(user.email);
        if (res.success) setMyRegs(res.data);
      } catch (err) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchMyRegs();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    toast.info("Logged out successfully");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">

        {/* Welcome Banner */}
        <div className="bg-[#0b1257] rounded-2xl p-7 mb-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black">
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-bold">Welcome back, {user?.name}! 👋</h1>
              <p className="text-blue-200 text-sm mt-0.5">{user?.email}</p>
              <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full mt-2">
                {user?.role?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Courses Enrolled", value: myRegs.length, icon: "📚", color: "bg-blue-50 border-blue-100" },
            { label: "Certificates Earned", value: "0", icon: "🏆", color: "bg-orange-50 border-orange-100" },
            { label: "Hours Learned", value: "0", icon: "⏱️", color: "bg-green-50 border-green-100" },
          ].map((s) => (
            <div key={s.label} className={`border rounded-2xl p-5 ${s.color}`}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-[#0b1257]">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* My Registered Courses */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#0b1257] text-base">My Course Registrations</h2>
          </div>

          {loading ? (
            <div className="py-12 text-center">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-400 text-sm">Loading...</p>
            </div>
          ) : myRegs.length === 0 ? (
            <div className="py-12 text-center">
              <div className="text-4xl mb-3 opacity-30">📚</div>
              <p className="text-gray-500 text-sm">You haven't registered for any courses yet.</p>
              <Link
                to="/"
                className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                Explore Courses →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Course</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Registered On</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {myRegs.map((reg) => (
                    <tr key={reg._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg">🎓</div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{reg.courseTitle}</p>
                            <p className="text-xs text-gray-400">{reg.courseId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(reg.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric", month: "short", year: "numeric"
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          reg.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                          reg.status === 'contacted' ? 'bg-blue-100 text-blue-600' :
                          reg.status === 'enrolled' ? 'bg-green-100 text-green-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {reg.status.charAt(0).toUpperCase() + reg.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="text-lg font-bold text-[#0b1257] mb-2">Start Your Learning Journey</h2>
          <p className="text-gray-500 text-sm mb-5">
            Browse industry-focused courses and kickstart your tech career today.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Explore Courses →
          </Link>
        </div>
      </div>
    </div>
  );
}
