export default function Exercise7() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    const deptComparison = a.department.localeCompare(b.department);

    if (deptComparison === 0) {
      return a.name.localeCompare(b.name);
    }

    return deptComparison;
  });

  return (
    <div className="exercise">
      <h2>Exercise 7</h2>
      <ul>
        {sortedEmployees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
