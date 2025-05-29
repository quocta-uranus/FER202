import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../images/Logo.png";

function Exercise4() {
  return (
    <div>
      {/* Header */}
      <div className="header text-white py-4">
        <img src={logo} alt="FPT University" className="logo" />
        <nav className="nav justify-content-center">
          <a className="nav-link text-white" href="#">
            Home
          </a>
          <a className="nav-link text-white" href="#about">
            About
          </a>
          <a className="nav-link text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
      {/* Contact Section */}
      <div className="section" id="contact">
        <h2>Contact</h2>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>
      {/* About Section */}
      <div className="section" id="about">
        <h2>About</h2>
        <p>This is the about section of the website.</p>
      </div>

      {/* Footer */}
      <div className="footer text-center py-3">
        © 2023 Website. All rights reserved.
      </div>
    </div>
  );
}

export default Exercise4;
