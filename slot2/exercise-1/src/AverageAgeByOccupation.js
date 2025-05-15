import React from "react";
import people from "./data/peopleData";

function AverageAgeByOccupation() {
  const calculateAverageAgeByOccupation = () => {
    const groupedByOccupation = people.reduce((groups, person) => {
      const { occupation } = person;
      groups[occupation] = groups[occupation] || [];
      groups[occupation].push(person);
      return groups;
    }, {});

    const averageAges = {};
    for (const occupation in groupedByOccupation) {
      const totalAge = groupedByOccupation[occupation].reduce(
        (sum, person) => sum + person.age,
        0
      );
      averageAges[occupation] = (
        totalAge / groupedByOccupation[occupation].length
      ).toFixed(1);
    }

    return averageAges;
  };

  const averageAges = calculateAverageAgeByOccupation();
  const occupations = Object.keys(averageAges);

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Occupation</th>
            <th>Average Age</th>
          </tr>
        </thead>
        <tbody>
          {occupations.map((occupation) => (
            <tr key={occupation}>
              <td>{occupation}</td>
              <td>{averageAges[occupation]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AverageAgeByOccupation;
