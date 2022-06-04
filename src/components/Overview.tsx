// Renders tasks

import "../Overview.css";
import { Task } from "../Task";

interface Props {
  tasks: Array<Task>;
}

function Overview(props: Props) {
  return (
    <div className="tasklist">
      <p>Tasks:</p>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
