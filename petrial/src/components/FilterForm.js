import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CarContext } from "../context/CarContext";

const FilterForm = () => {
  const [price, setPrice] = useState("");
  const { dispatch } = useContext(CarContext);

  const handleFilter = () => {
    const p = parseFloat(price);
    if (!isNaN(p)) {
      dispatch({ type: "FILTER_BY_PRICE", payload: p });
    }
  };

  return (
    <Form className="mb-3">
      <Form.Label>Filter by Price (≤)</Form.Label>
      <Form.Control
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="secondary" className="mt-2" onClick={handleFilter}>
        Search
      </Button>
    </Form>
  );
};

export default FilterForm;
