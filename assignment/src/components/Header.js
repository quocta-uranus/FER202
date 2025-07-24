import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="main-header">
      <div className="banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">CarPassion</h1>
            <p className="banner-subtitle">{t.subtitle}</p>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="nav-logo">
          <Link to="/">CarPassion</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            {t.home}
          </Link>
          <Link to="/products/add" className="nav-link">
            {t.addCar}
          </Link>
          <Link to="/manager" className="nav-link">
            {t.productManager}
          </Link>
        </div>
        <div className="nav-controls">
          {currentUser ? (
            <div className="user-controls">
              <span className="welcome-message">
                {t.welcomeUser.replace("{name}", currentUser.fullName)}
              </span>
              <button className="logout-button" onClick={handleLogout}>
                {t.logout}
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              {t.login}
            </Link>
          )}
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? t.lightMode : t.darkMode}
          </button>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === "vi" ? "English" : "Tiếng Việt"}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
