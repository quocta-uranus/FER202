import React from "react";
import { Card } from "react-bootstrap";

function Description({ text }) {
  return <Card.Text style={{ color: "#6c757d", fontSize: "1.2rem" }}>{text}</Card.Text>;
}

export default Description;
