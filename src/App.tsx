//handle the input field with the logic

import "./App.css";
import Overview from "./components/Overview";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./Task";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [inputValue, setInputValue] = useState("");

  function handleInput() {
    const taskDescriptions = tasks.map((task) => task.description);
    if (!inputValue) {
      alert("No task entered!");
    } else if (taskDescriptions.includes(inputValue)) {
      alert("Task already included!");
    } else {
      const newTask: Task = { id: uuidv4(), description: inputValue };
      const finalTasks: Array<Task> = [...tasks, newTask];
      setTasks(finalTasks);
      setInputValue("");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleDeleteTask(taskID: string) {
    const newTasks: Array<Task> = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
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
      <Overview onDeleteTask={handleDeleteTask} tasks={tasks}></Overview>
    </div>
  );
}

export default App;
