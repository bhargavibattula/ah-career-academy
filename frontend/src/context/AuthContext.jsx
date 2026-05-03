import { createContext, useContext, useState, useEffect } from "react";
import { getMe, logoutUser, setStoredToken } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount, verify session with backend using stored token
    const verifySession = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        setLoading(false);
        return;
      }

      try {
        // Validate token is still valid by calling /auth/me
        const data = await getMe();
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          // Token expired or invalid — clear everything
          localStorage.removeItem("user");
          setStoredToken(null);
          setUser(null);
        }
      } catch {
        // Backend rejected the token — clear stale data
        localStorage.removeItem("user");
        setStoredToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    if (token) setStoredToken(token);
  };

  const logout = async () => {
    await logoutUser(); // Clears token from localStorage + calls /auth/logout
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
