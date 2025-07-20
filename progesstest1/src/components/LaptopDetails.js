import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

function LaptopDetails() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <h2 className="text-center mt-5">404 Not Found</h2>;
  if (!laptop) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <Container className="mt-4">
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
            <br />
            Description: {laptop.description || "No description provided."}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetails;
