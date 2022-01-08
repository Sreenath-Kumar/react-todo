import "font-awesome/css/font-awesome.min.css";
import "./css/todo.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Task from "./task";
import CompletedTask from "./CompletedTask";

function ToDoTemplate() {
  //Function Area
  const del = <FontAwesomeIcon icon={faTimesCircle} />;

  const [inputedTask, setinputedTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setcompletedTasks] = useState([]);

  const handleInput = (event) => {
    setinputedTask(event.target.value);
  };

  const addTasks = (event) => {
    event.preventDefault();
    setTasks((oldTask) => {
      return [...oldTask, inputedTask];
    });
    setinputedTask("");
  };
  var completedTask = [];
  const delTask = (e, id) => {
    e.preventDefault();
    setTasks((oldTask) => {
      return oldTask.filter((arrEle, index) => {
        return index !== id;
      });
    });
    completedTask = tasks[id];
    addCompletedTask();
  };

  const addCompletedTask = () => {
    // event.preventDefault();
    setcompletedTasks((olditems) => {
      return [...olditems, completedTask];
    });
  };

  const vanishTask = (e, id) => {
    e.preventDefault();
    setcompletedTasks(() => {
      return completedTasks.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  var editable = "false";
  const makeEditable = (e) => {
    e.preventDefault();
    console.log("makeeditable");
    return (editable = "true");
  };
  // Function Area Ends

  return (
    <div className="container">
      {/* Task Area */}
      <div className="sider">
        <div className="dots">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>

        <div className="my-name">
          <h2>Hello, Appy</h2>
        </div>

        <div className="incomplete-task-up">
          <div className="incomplete-task">
            <p>
              You have {tasks.length}{" "}
              <span style={{ color: "#FFBD44" }}>Incompleted</span>
              Tasks :(
            </p>
          </div>
        </div>

        <div className="uppertaskarea">
          <form onSubmit={addTasks} className="addtask">
            <input
              type="text"
              name="task"
              placeholder="Add A New Task"
              value={inputedTask}
              onChange={handleInput}
            />
            <button type="submit" className="submit-button" name="addTask">
              Add Task
            </button>
          </form>
          <div className="taskarea">
            {tasks.map((item, index) => {
              if (item !== "") {
                return (
                  <Task
                    text={item}
                    delicon={del}
                    key={index}
                    id={index}
                    selected={delTask}
                    edit={editable}
                    makeEditable={makeEditable}
                  />
                );
              } else {
                return (
                  <div className="tasks">
                    <p>Add Your tasks please</p>
                    <div className="task-update-delete">
                      <div className="delete">
                        <a href="/">{del}</a>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            {completedTasks.map((item, index) => {
              return (
                <CompletedTask
                  key={index}
                  id={index}
                  text={item}
                  delicon={del}
                  clickAction={vanishTask}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoTemplate;
