export default function Exercise9() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  ];

  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return (
    <div className="exercise">
      <h2>Exercise 9</h2>
      <p>
        Have employees who are teenagers (10-20 years old):{" "}
        {isTeenager ? "Yes" : "No"}
      </p>
      <p>List teenager:</p>
      <ul>
        {employees
          .filter((e) => e.age >= 10 && e.age <= 20)
          .map((employee, index) => (
            <li key={employee.id || index}>
              {employee.name} - {employee.age} tuổi
            </li>
          ))}
      </ul>
    </div>
  );
}
