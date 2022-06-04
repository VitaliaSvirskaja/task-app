// Renders tasks

import "../Overview.css";

interface Props {
  tasks: Array<string>;
}

function Overview(props: Props) {
  return (
    <div className="tasklist">
      <p>Tasks:</p>
      <ul>
        {props.tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
