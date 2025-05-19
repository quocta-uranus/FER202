export default function Exercise5() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  ];

  return (
    <div className="exercise">
      <h2>Exercise 5</h2>
      <select>
        <option value="">Select employee</option>
        {employees.map((employee, index) => (
          <option key={employee.id || index} value={employee.id || index}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}
