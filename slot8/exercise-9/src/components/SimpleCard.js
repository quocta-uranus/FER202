import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

function SimpleCard({ item }) {
  return (
    <Card className="mb-3" style={{ overflow: "hidden", border: "2px solid #6c757d" }}>
      <Row className="g-0">
        <Col xs={4} md={3} className="d-flex align-items-center justify-content-center" 
             style={{ backgroundColor: "#fff8dc", padding: "15px" }}>
          <Image url={item.imageUrl} />
        </Col>
        <Col xs={8} md={9}>
          <Card.Body>
            <Title text={item.title} />
            <Description text={item.description} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
