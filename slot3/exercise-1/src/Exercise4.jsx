export default function Exercise4() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  ];

  const averageAge = (...ages) => {
    const sum = ages.reduce((total, age) => total + age, 0);
    return sum / ages.length;
  };

  const ages = employees.map((employee) => employee.age);

  return (
    <div className="exercise">
      <h2>Exercise 4</h2>
      <p> Average Age: {averageAge(...ages)}</p>
    </div>
  );
}
