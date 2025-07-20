import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();

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
        </div>
        <div className="nav-controls">
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
