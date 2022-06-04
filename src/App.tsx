//handle the input field with the logic

import "./App.css";
import Overview from "./components/Overview";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

function App() {
  const [tasks, setTask] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState("");

  function handleInput() {
    if (!inputValue) {
      alert("No task entered!");
    } else if (tasks.includes(inputValue)) {
      alert("Task already included!");
    } else {
      const finalTasks = [...tasks, inputValue];
      setTask(finalTasks);
      setInputValue("");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          name="task-input"
          id="task-input"
          onChange={handleChange}
          value={inputValue}
        />
        <label htmlFor="task-input"></label>
        <button type="submit" onClick={handleInput}>
          Submit
        </button>
      </div>
      <Overview tasks={tasks}></Overview>
    </div>
  );
}

export default App;
