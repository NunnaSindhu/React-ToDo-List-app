import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Filter from "./Filter";
import Tasks from "./Tasks";

function App() {
  const [filter, setFilter] = useState("All");
  const [newId, setNewId] = useState(5);
  const [tasks, setTasks] = useState([
    { id: 1, task: "Create theme", done: false },
    { id: 2, task: "Work on wordpress", done: false },
    { id: 3, task: "Organize office main department", done: false },
    { id: 4, task: "Error solve in HTML template", done: false },
  ]);

  const formSubmit = (value) => {
    setNewId(newId + 1);
    const newTask = {
      id: newId,
      task: value,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };
  const onCheckHandler = (id, checked) => {
    setTasks(
      tasks.map((item) => {
        return item.id === id ? { ...item, done: checked } : item;
      })
    );
  };
  const onFilterChange = (currentValue) => {
    setFilter(currentValue);
    console.log(currentValue);
  };
  const filterTask = () => {
    if (filter === "Active") {
      return tasks.filter((item) => item.done === false);
    } else if (filter === "Completed") {
      return tasks.filter((item) => item.done === true);
    }
    return tasks;
  };
  const deleteHandler = (id) => {
    setTasks(
      tasks.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <h1>ToDo-List</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={formSubmit} />
              <Filter onFilterChange={onFilterChange} />
              <Tasks
                tasks={filterTask()}
                onCheckHandler={onCheckHandler}
                deleteHandler={deleteHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
