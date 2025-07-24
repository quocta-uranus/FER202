import React from "react";
import { Container } from "react-bootstrap";
import FilterForm from "../components/FilterForm";
import CarList from "../components/CarList";

const CarManagementPage = () => (
  <Container className="mt-4">
    <h3>Car Management</h3>
    <FilterForm />
    <CarList />
  </Container>
);

export default CarManagementPage;
