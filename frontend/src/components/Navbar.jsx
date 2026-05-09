import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const navLinks = [
  {
    label: "Courses",
    dropdown: ["Full Stack Python", "Data Science", "Cyber Security", "Full Stack Java", "DevOps & Cloud", "AI Testing", "Quantum Computing", "Gen AI Development"],
  },
  {
    label: "Resources",
    dropdown: ["Blog", "Interview Questions", "Free Tutorials", "E-Books", "Webinars"],
  },

  {
    label: "Placements",
    dropdown: ["Placement Stories", "Hiring Partners", "Placement Stats"],
  },
  {
    label: "Upcoming Batches",
    dropdown: ["Online Batches", "Offline Batches", "Weekend Batches"],
  },
  {
    label: "More",
    dropdown: ["About Us", "Kids Training", "Careers", "Contact Us", "Reviews", "Our Blog"],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img src="/logo.jpg" alt="AH Career Logo" className="h-16 w-auto object-contain" />
            <span className="text-[#0d1b3e] font-black text-3xl tracking-tight">AH CAREER</span>
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
                <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors rounded-md hover:bg-orange-50">
                  {link.label}
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === link.label && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[200px] py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        to={item === "Contact Us" ? "/contact" : item === "Careers" ? "/careers" : item === "Reviews" ? "/reviews" : item === "About Us" ? "/about" : item === "Kids Training" ? "/kids-training" : item === "Our Blog" ? "/blog" : "#"}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      >
                        {item}
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
                  className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#0b1257] hover:bg-[#1a2580] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/10"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-orange-500/20"
                >
                  Join for Free
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label} className="px-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">{link.label}</div>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      to={item === "Contact Us" ? "/contact" : item === "Careers" ? "/careers" : item === "Reviews" ? "/reviews" : item === "About Us" ? "/about" : item === "Kids Training" ? "/kids-training" : item === "Our Blog" ? "/blog" : "#"}
                      className="block py-2 text-sm text-gray-700 hover:text-orange-500 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="px-4 pt-4 border-t border-gray-100">
              {user ? (
                <div className="space-y-3">
                  <Link
                    to={user.role === "admin" ? "/admin-dashboard" : "/dashboard"}
                    className="block text-center w-full py-3 text-sm font-bold text-gray-700 border border-gray-200 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 bg-[#0b1257] text-white font-bold rounded-xl text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    className="flex items-center justify-center py-3 text-sm font-bold text-gray-700 border border-gray-200 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center py-3 text-sm font-bold bg-orange-500 text-white rounded-xl"
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
