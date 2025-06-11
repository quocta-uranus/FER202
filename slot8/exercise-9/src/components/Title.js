import React from 'react';
import { Card } from 'react-bootstrap';

function Title({ text }) {
  return <Card.Title style={{ color: "#f26f21", fontSize: "2rem", fontWeight: "bold" }}>{text}</Card.Title>;
}

export default Title;