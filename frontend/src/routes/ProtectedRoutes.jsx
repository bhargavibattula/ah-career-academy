import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ─── Loading Spinner ──────────────────────────────────────────────────────────
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#0b1257] border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500 text-sm font-medium">Loading...</p>
    </div>
  </div>
);

// ─── ProtectedRoute — Requires login ─────────────────────────────────────────
export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (!user) {
    // Redirect to login, preserve intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// ─── AdminRoute — Requires login + admin role ─────────────────────────────────
export const AdminRoute = ({ children }) => {
  const { user, loading, isAdmin } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    // Logged in but not admin → redirect to user dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// ─── GuestRoute — Redirect already-logged-in users ───────────────────────────
export const GuestRoute = ({ children }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) return <LoadingScreen />;

  if (user) {
    // Already logged in → redirect to appropriate dashboard
    return <Navigate to={isAdmin ? "/admin-dashboard" : "/dashboard"} replace />;
  }

  return children;
};
