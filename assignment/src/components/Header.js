import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
    <>
      {/* Banner Section */}
      <div className="bg-primary text-white py-5 mb-0">
        <Container>
          <div className="text-center">
            <h1 className="display-4 fw-bold">CarPassion</h1>
            <p className="lead">{t.subtitle}</p>
          </div>
        </Container>
      </div>

      {/* Navigation */}
      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        expand="lg"
        sticky="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold">CarPassion</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>{t.home}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/add">
                <Nav.Link>{t.addCar}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/manager">
                <Nav.Link>{t.productManager}</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="ms-auto">
              {currentUser ? (
                <NavDropdown
                  title={`${t.welcomeUser.replace(
                    "{name}",
                    currentUser.fullName
                  )}`}
                  id="user-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogout}>
                    {t.logout}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>{t.login}</Nav.Link>
                </LinkContainer>
              )}

              <Button
                variant={darkMode ? "outline-light" : "outline-dark"}
                size="sm"
                className="me-2"
                onClick={toggleTheme}
              >
                {darkMode ? t.lightMode : t.darkMode}
              </Button>

              <Button
                variant="outline-secondary"
                size="sm"
                onClick={toggleLanguage}
              >
                {language === "vi" ? "English" : "Tiếng Việt"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
