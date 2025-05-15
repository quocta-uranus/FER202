import React from "react";
import people from "./data/peopleData";

function FirstTeenager() {
  const firstTeenager = people.find((person) => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <div>
          <p>Name: {firstTeenager.name}</p>
          <p>Age: {firstTeenager.age}</p>
          <p>Occupation: {firstTeenager.occupation}</p>
        </div>
      ) : (
        <p>No teenagers found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;