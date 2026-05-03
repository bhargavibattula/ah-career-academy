import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      {/* Content */}
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
            { label: "Courses Enrolled", value: "0", icon: "📚", color: "bg-blue-50 border-blue-100" },
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

        {/* CTA */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="text-lg font-bold text-[#0b1257] mb-2">Start Your Learning Journey</h2>
          <p className="text-gray-500 text-sm mb-5">
            Browse 100+ industry-focused courses and kickstart your tech career today.
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
