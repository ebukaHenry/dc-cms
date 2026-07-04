import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // 

const AuthContext = createContext(null);
const TOKEN_KEY = "church_app_token"; // localStorage key

// Helper: decode token safely
const decodeToken = (token) => {
  try {
    return jwtDecode(token); // expects { sub, name, role, exp, ... }
  } catch {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem(TOKEN_KEY);
    return t ? decodeToken(t) : null;
  });
  const [loading, setLoading] = useState(true);

  // On app start: check if token expired
  useEffect(() => {
    if (token) {
      const decoded = decodeToken(token);
      const isExpired = decoded?.exp * 1000 < Date.now(); // exp is in seconds

      if (isExpired) {
        logout(); // token dead
      } else {
        setUser(decoded);
      }
    }
    setLoading(false);
  }, []); // run once

  const login = (newToken) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    const decoded = decodeToken(newToken);
    setToken(newToken);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  // Role checker: use in components/routes
  const hasRole = (requiredRole) => {
    if (!user) return false;
    // Case 1: user.role = "HOD" 
    if (user.role === requiredRole) return true; 
    // Case 2: user.roles = ["HOD", "Media"] 
    if (Array.isArray(user.roles)) return user.roles.includes(requiredRole);
    return false;
  };

  const isAuthenticated = !!token && !!user;

  // Axios/Fetch interceptor helper
  const authHeader = () => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const value = {
    token,
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    hasRole,
    authHeader
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook so you don't import useContext every time
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};