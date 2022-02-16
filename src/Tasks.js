import React from "react";
import Task from "./Task";

function Tasks({ tasks, onCheckHandler, deleteHandler }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <div>No Items to display</div>
      ) : (
        tasks.map((item) => {
          return (
            <Task
              key={item.id}
              task={item.task}
              done={item.done}
              id={item.id}
              onCheckHandler={onCheckHandler}
              deleteHandler={deleteHandler}
            />
          );
        })
      )}
    </div>
  );
}
export default Tasks;
