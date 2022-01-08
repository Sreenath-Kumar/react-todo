function CompletedTasks(props) {
  return (
    <div className="tasks completed" id={props.id}>
      <p>{props.text}</p>
      <div className="task-update-delete">
        <div className="delete">
          <a
            href="/"
            onClick={(e) => {
              props.clickAction(e, props.id);
            }}
          >
            {props.delicon}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompletedTasks;
