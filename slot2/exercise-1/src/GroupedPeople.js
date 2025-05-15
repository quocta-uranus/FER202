import React from "react";
import people from "./data/peopleData";

function GroupedPeople() {
  const groupByOccupation = () => {
    return people.reduce((groups, person) => {
      const { occupation } = person;
      groups[occupation] = groups[occupation] || [];
      groups[occupation].push(person);
      return groups;
    }, {});
  };

  const groupedPeople = groupByOccupation();
  const occupations = Object.keys(groupedPeople);

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {occupations.map((occupation) => (
        <div key={occupation}>
          <h3>{occupation}s</h3>
          <ul>
            {groupedPeople[occupation].map((person) => (
              <li key={person.id}>
                {person.name} - {person.age} years old
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedPeople;
