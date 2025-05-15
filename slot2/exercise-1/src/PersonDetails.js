import React from "react";

function PersonDetails() {
  const person = { name: "John Doe", age: 28, occupation: "Developer" };

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;
