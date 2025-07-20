import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/Laptops")
      .then((res) => setLaptops(res.data));
  }, []);

  const handleSearch = () => {
    axios
      .get(`http://localhost:3001/Laptops?model_like=${search}`)
      .then((res) => setLaptops(res.data));
  };

  return (
    <Container className="mt-3">
      <h2>Laptop Management</h2>
      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          placeholder="Search by model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="info" onClick={handleSearch} className="ms-2">
          Search
        </Button>
      </Form>
      <Row>
        {laptops.map((laptop) => (
          <Col md={4} key={laptop.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={laptop.image} />
              <Card.Body>
                <Card.Title>
                  {laptop.brand} - {laptop.model}
                </Card.Title>
                <Card.Text>
                  Year: {laptop.year}
                  <br />
                  Price: {laptop.price}
                </Card.Text>
                <Button onClick={() => navigate(`/laptops/${laptop.id}`)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopList;
