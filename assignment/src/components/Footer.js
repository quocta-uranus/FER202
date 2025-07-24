import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const { t, language, toggleLanguage } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <h3>CarPassion</h3>
          </Link>
          <p>{t.subtitle}</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>{t.home}</h4>
            <ul>
              <li>
                <Link to="/">{t.productList}</Link>
              </li>
              <li>
                <Link to="/products/add">{t.addCar}</Link>
              </li>
              <li>
                <Link to="/manager">{t.productManager}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.language}</h4>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (language !== "vi") toggleLanguage();
                  }}
                >
                  Tiếng Việt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (language !== "en") toggleLanguage();
                  }}
                >
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 CarPassion. {darkMode ? "🌙" : "☀️"}</p>
      </div>
    </footer>
  );
}

export default Footer;
