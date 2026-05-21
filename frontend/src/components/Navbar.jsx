import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { courses } from "../data/courses";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Dynamically generate nav links to ensure all courses appear
  const navLinks = useMemo(() => [
    {
      label: "Courses",
      links: courses.map((course) => ({
        label: course.title,
        path: `/courses/${course.id}`,
      })),
    },
    {
      label: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Reviews", path: "/reviews" },
      ],
    },
    {
      label: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
      ],
    },
    {
      label: "Programs",
      links: [
        { label: "Job Ready Program", path: "/programs/job-ready" },
        { label: "Kids Training", path: "/kids-training" },
      ],
    },
  ], []);

  const handleLogout = async () => {
    await logout();
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-[#F8FAFC] border-b border-[#38BDF8]/25 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img src="/logo.jpg" alt="AH Career Logo" className="h-16 w-auto object-contain" />
            <span className="text-[#0F172A] font-black text-3xl tracking-tight">AH CAREER</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-[#0F172A] hover:text-[#2563EB] font-medium text-sm transition-colors rounded-md hover:bg-[#38BDF8]/10">
                  {link.label}
                  <ChevronDownIcon className="w-3.5 h-3.5 text-[#2563EB]" />
                </button>
                {openMenu === link.label && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-[#38BDF8]/25 min-w-[200px] py-2 z-50">
                    {link.links.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-[#0F172A] hover:bg-[#38BDF8]/10 hover:text-[#2563EB] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to={user.role === "admin" ? "/admin-dashboard" : "/dashboard"}
                  className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20"
                >
                  Join for Free
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#2563EB] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#38BDF8]/25 py-4 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label} className="px-4">
                  <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 mt-4">{link.label}</div>
                  {link.links.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 text-sm text-[#0F172A] hover:text-[#2563EB] font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="px-4 pt-4 border-t border-[#38BDF8]/25">
              {user ? (
                <div className="space-y-3">
                  <Link
                    to={user.role === "admin" ? "/admin-dashboard" : "/dashboard"}
                    className="block text-center w-full py-3 text-sm font-bold text-[#0F172A] border border-[#38BDF8]/35 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 bg-[#2563EB] text-white font-bold rounded-xl text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    className="flex items-center justify-center py-3 text-sm font-bold text-[#0F172A] border border-[#38BDF8]/35 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center py-3 text-sm font-bold bg-[#2563EB] text-white rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Join
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
