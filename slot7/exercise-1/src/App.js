import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise7 from "./components/Exercise7";
function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">Slot 5 Exercises</h1>

      <h2 className="text-center mt-5">Exercise 3</h2>
      <Exercise3 />

      <hr />

      <h2 className="text-center mt-5">Exercise 4</h2>
      <Exercise4 />

      <hr />

      <h2 className="text-center mt-5">Exercise 5</h2>
      <Exercise5 />
      <div className="d-flex justify-content-between p-5">
        <Exercise7 color="bg-primary text-white" />
        <Exercise7 color="bg-success text-white" />
        <Exercise7 color="bg-warning text-dark" />
      </div>
    </div>
  );
}

export default App;
