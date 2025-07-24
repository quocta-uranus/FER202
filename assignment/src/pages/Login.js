import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

function Login({
  redirectPath = "/",
  showBackLink = true,
  customTitle = null,
}) {
  const { t } = useLanguage();
  const { login, currentUser, error } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      navigate(redirectPath);
    }
  }, [currentUser, navigate, redirectPath]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!formData.username.trim()) {
      newErrors.username = t.requiredField;
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = t.requiredField;
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const success = await login(formData.username, formData.password);
      if (success) {
        navigate(redirectPath);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>{customTitle || t.loginTitle}</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">{t.username}</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={formErrors.username ? "error" : ""}
            />
            {formErrors.username && (
              <span className="error-text">{formErrors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.password}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? "error" : ""}
            />
            {formErrors.password && (
              <span className="error-text">{formErrors.password}</span>
            )}
          </div>

          <button type="submit" className="login-button">
            {t.loginButton}
          </button>
        </form>

        {showBackLink && (
          <div className="back-link">
            <Link to="/">{t.back}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

// PropTypes validation
Login.propTypes = {
  // Đường dẫn chuyển hướng sau khi đăng nhập thành công
  redirectPath: PropTypes.string,
  // Có hiển thị link quay lại hay không
  showBackLink: PropTypes.bool,
  // Tiêu đề tùy chỉnh cho form đăng nhập
  customTitle: PropTypes.string,
};

// Default props
Login.defaultProps = {
  redirectPath: "/",
  showBackLink: true,
  customTitle: null,
};

export default Login;
