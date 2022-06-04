// Renders tasks

import "../Overview.css";
import { Task } from "../Task";

interface Props {
  tasks: Array<Task>;
  onDeleteTask: (taskID: string) => void;
}

function Overview(props: Props) {
  return (
    <div className="tasklist">
      <p>Tasks:</p>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <img
              src="trash-solid.svg"
              alt="deleteIcon"
              onClick={() => props.onDeleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
