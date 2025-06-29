import React from "react";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navigation />
      <Container className="mt-3">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
