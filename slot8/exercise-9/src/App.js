import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import SimpleCard from "./components/SimpleCard";

function App() {
  // Sample data for our cards
  const cardItems = [
    {
      title: "React Components",
      description: "Learn about React components and how they work",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Row className="mt-5">
        {cardItems.map((item, index) => (
          <Col key={index} xs={12} className="mb-3">
            <SimpleCard item={item} />
          </Col>
        ))}
      </Row>
      <header style={{ backgroundColor: "#f26f21" }}>
        <Container className="py-3 text-center">
          <div className="bg-white py-3 mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="FPT Education Logo"
              style={{ height: "60px", marginBottom: "10px" }}
            />
            <h1
              style={{
                color: "#f26f21",
                fontWeight: "bold",
                fontSize: "2.5rem",
              }}
            >
              FPT UNIVERSITY
            </h1>
          </div>
        </Container>

        <Navbar
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#f26f21" }}
        >
          <Container className="justify-content-center">
            <Nav>
              <Nav.Link href="#home" className="text-white mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white mx-3">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white mx-3">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container className="flex-grow-1 my-4">
        <section id="about" className="mb-5">
          <h2 className="text-center mb-4">About</h2>
          <p className="text-center">
            This is the about section of the website.
          </p>
        </section>

        <section id="contact" className="mb-5">
          <h2 className="text-center mb-4">Contact</h2>
          <p className="text-center">
            For any inquiries, please contact us at example@example.com.
          </p>
        </section>
      </Container>

      <footer style={{ backgroundColor: "#f8d07a", padding: "15px 0" }}>
        <Container>
          <p className="text-center mb-0">
            © 2023 Website. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
