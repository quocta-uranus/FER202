import React from "react";
import people from "./data/peopleData";

function PeopleList() {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} years old - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;