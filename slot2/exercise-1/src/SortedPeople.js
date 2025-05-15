import React from "react";
import people from "./data/peopleData";

function SortedPeople() {
  // Create a copy of the array to avoid mutating the original
  const sortedPeople = [...people].sort((a, b) => {
    // First sort by occupation alphabetically
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    
    // If occupations are the same, sort by age in ascending order
    return a.age - b.age;
  });

  return (
    <div>
      <h2>People Sorted by Occupation and Age</h2>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortedPeople;