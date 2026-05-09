import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { getMyRegistrations } from "../services/registrationService";
import { toast } from "react-toastify";
import { 
  BookOpenIcon, 
  TrophyIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  RocketLaunchIcon,
  HandRaisedIcon
} from "@heroicons/react/24/outline";

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
        <div className="bg-[#0b1257] rounded-2xl p-7 mb-8 text-white shadow-xl shadow-blue-900/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg">
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-bold flex items-center gap-2">
                Welcome back, {user?.name}! 
                <HandRaisedIcon className="w-5 h-5 text-orange-400" />
              </h1>
              <p className="text-blue-200 text-sm mt-0.5">{user?.email}</p>
              <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full mt-2 uppercase tracking-widest">
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Courses Enrolled", value: myRegs.length, icon: <BookOpenIcon className="w-8 h-8" />, color: "bg-blue-50 border-blue-100 text-blue-600" },
            { label: "Certificates Earned", value: "0", icon: <TrophyIcon className="w-8 h-8" />, color: "bg-orange-50 border-orange-100 text-orange-600" },
            { label: "Hours Learned", value: "0", icon: <ClockIcon className="w-8 h-8" />, color: "bg-green-50 border-green-100 text-green-600" },
          ].map((s) => (
            <div key={s.label} className={`border rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3`}>
              <div className={`${s.color} opacity-80`}>{s.icon}</div>
              <div>
                <div className="text-2xl font-bold text-[#0b1257]">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
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
              <BookOpenIcon className="w-16 h-16 text-gray-200 mx-auto mb-3" />
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
                          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                            <AcademicCapIcon className="w-6 h-6" />
                          </div>
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
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <RocketLaunchIcon className="w-12 h-12 text-orange-500 mx-auto mb-4 opacity-80" />
          <h2 className="text-lg font-bold text-[#0b1257] mb-2 uppercase tracking-tight">Start Your Learning Journey</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            Browse industry-focused courses and kickstart your tech career with expert mentoring today.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
