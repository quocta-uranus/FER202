import React from "react";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleText from "./components/ToggleText";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragAndDropList from "./components/DragAndDropList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React Exercises</h1>
      <div className="component-container">
        <Counter />
      </div>
      <div className="component-container">
        <ControlledInput />
      </div>
      <div className="component-container">
        <ToggleText />
      </div>
      <div className="component-container">
        <TodoList />
      </div>
      <div className="component-container">
        <ColorSwitcher />
      </div>
      <div className="component-container">
        <SearchFilter />
      </div>
      <div className="component-container">
        <DragAndDropList />
      </div>
    </div>
  );
}

export default App;
