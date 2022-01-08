function Task(props) {
  return (
    <div className="tasks">
      <p>{props.text}</p>
      <div className="task-update-delete">
        <div className="delete">
          <a
            href="/"
            onClick={(e) => {
              props.selected(e, props.id);
            }}
          >
            {props.delicon}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Task;
