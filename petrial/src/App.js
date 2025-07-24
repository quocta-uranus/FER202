import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import CarManagementPage from "./pages/CarManagementPage";
import { CarProvider } from "./context/CarContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => (
  <CarProvider>
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Car App</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/cars">
              Car Management
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/cars" element={<CarManagementPage />} />
      </Routes>
    </Router>
  </CarProvider>
);

export default App;
