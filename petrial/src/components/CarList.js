import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { Card, Row, Col } from "react-bootstrap";

const CarList = () => {
  const { state } = useContext(CarContext);
  const carsToShow = state.filteredCars.length
    ? state.filteredCars
    : state.cars;

  return (
    <Row>
      {carsToShow.map((car) => (
        <Col md={6} lg={4} className="mb-3" key={car.id}>
          <Card>
            {car.image && (
              <Card.Img variant="top" src={car.image} alt={car.model} />
            )}
            <Card.Body>
              <Card.Title>
                {car.make} {car.model}
              </Card.Title>
              <Card.Text>
                Year: {car.year}
                <br />
                Price: ${car.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CarList;
