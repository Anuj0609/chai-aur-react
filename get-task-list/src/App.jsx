import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskListToDisplay, setTaskListToDisplay] = useState([]);

  const categoryList = [
    "TODO",
    "GROCERYLIST",
    "FUNCTIONTASK",
    "TRAVEL-DESTINATION",
    "MOVIES-TO-WATCH",
  ];

  const addTask = (e) => {
    e.preventDefault();
    if (task !== "") {
      const newTask = {
        name: task,
        isDone: false,
        category: category,
        id: Math.floor(Math.random() * 999999),
      };

      const updatedTask = [...taskList, newTask];
      localStorage.setItem("taskList", JSON.stringify(updatedTask));
      setTaskList(updatedTask);
      setTask("");
    }
  };

  const getTasks = () => {
    const list = JSON.parse(localStorage.getItem("taskList"));
    if (!list) {
      return;
    }
    setTaskList(list);
    // setTaskListToDisplay(list);
  };
  useEffect(() => {
    getTasks();
  }, []);

  const handleTaskCompletion = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );

    setTaskList(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };

  const clearTaskList = () => {
    setTaskList([]);
    localStorage.removeItem("taskList");
  };
  useEffect(() => {
    const filteredTasks = taskList.filter((task) => task.category === category);
    setTaskListToDisplay(filteredTasks);
  }, [taskList, category]);

  return (
    <div className="container">
      <div className="header">
        <h1>Task Manager</h1>
        <div className="select-container">
          <select
            className="category-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Select Category</option>
            {categoryList.map((catL, index) => (
              <option key={index} value={catL}>
                {catL}
              </option>
            ))}
          </select>
        </div>
      </div>
      <form className="add-task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          disabled={!category}
        />
        <button type="submit" disabled={!category}>
          Add Task
        </button>
      </form>
      <div className="task-list">
        <ul>
          {taskListToDisplay.map((todo) => (
            <li key={todo.id} className={todo.isDone ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => {
                  handleTaskCompletion(todo.id);
                }}
              />
              {todo.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="clear-button" onClick={clearTaskList}>
        Clear Task List
      </button>
    </div>
  );
}

export default App;
