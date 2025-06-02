import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;
