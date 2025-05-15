import React from "react";
import people from "./data/peopleData";

function OldestYoungest() {
  const findOldestAndYoungest = () => {
    if (people.length === 0) return { oldest: null, youngest: null };

    return people.reduce(
      (result, person) => {
        if (person.age > result.oldest.age) result.oldest = person;
        if (person.age < result.youngest.age) result.youngest = person;
        return result;
      },
      { oldest: people[0], youngest: people[0] }
    );
  };

  const { oldest, youngest } = findOldestAndYoungest();

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      {oldest && youngest ? (
        <>
          <div>
            <h3>Oldest Person:</h3>
            <p>Name: {oldest.name}</p>
            <p>Age: {oldest.age}</p>
            <p>Occupation: {oldest.occupation}</p>
          </div>
          <div>
            <h3>Youngest Person:</h3>
            <p>Name: {youngest.name}</p>
            <p>Age: {youngest.age}</p>
            <p>Occupation: {youngest.occupation}</p>
          </div>
        </>
      ) : (
        <p>No people data available.</p>
      )}
    </div>
  );
}

export default OldestYoungest;
