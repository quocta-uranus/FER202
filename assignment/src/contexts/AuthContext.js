import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Kiểm tra nếu người dùng đã đăng nhập trước đó
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      setError("");
      setLoading(true);
      // Gọi API để kiểm tra thông tin đăng nhập
      const response = await axios.get(
        `http://localhost:3001/users?username=${username}&password=${password}`
      );

      if (response.data.length > 0) {
        const user = response.data[0];
        // Lưu thông tin người dùng vào localStorage (không bao gồm mật khẩu)
        const userToStore = {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          role: user.role,
        };
        localStorage.setItem("user", JSON.stringify(userToStore));
        setCurrentUser(userToStore);
        return true;
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
        return false;
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi đăng nhập");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);