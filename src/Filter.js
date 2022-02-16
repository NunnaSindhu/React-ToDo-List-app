import React from "react";

function Filter({ onFilterChange }) {
  const filters = ["All", "Active", "Completed"];
  const clickHandler = (currentValue) => {
    onFilterChange(currentValue);
  };
  return (
    <ul className="nav nav-pills todo-nav">
      {filters.map((item) => {
        return (
          <li
            key={item}
            role="presentation"
            className="nav-item all-task active"
            onClick={() => clickHandler(item)}
          >
            <a href="#" className="nav-link">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default Filter;
