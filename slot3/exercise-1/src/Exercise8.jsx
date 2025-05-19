export default function Exercise8() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  ];

  const groupByDepartment = employees.reduce((groups, employee) => {
    const { department } = employee;
    if (!groups[department]) {
      groups[department] = [];
    }
    groups[department].push(employee);
    return groups;
  }, {});

  return (
    <div className="exercise">
      <h2>Exercise 8</h2>
      {Object.entries(groupByDepartment).map(([department, deptEmployees]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {deptEmployees.map((employee, index) => (
              <li key={employee.id || index}>{employee.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
