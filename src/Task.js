import React from "react";

function Task({ task, done,id, onCheckHandler,deleteHandler }) {
  return (
     <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className="">
          <input
            type="checkbox"
            checked={done}
            onChange={e=>onCheckHandler(id,e.target.checked)}
          />
        </span>
      </div>
      <span> {task}</span>
     <button className="btn btn-danger"  onClick={()=>deleteHandler(id)}>X</button>
    </div>
  );
}

export default Task;
