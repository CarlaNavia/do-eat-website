import React from "react";
import "./TaskDetail.css"

function TaskDetail({ eachDetail }) {
  return (
    <div className="card-detail">
      <h2><strong>{eachDetail.title}</strong></h2>
      <p>{eachDetail.description}</p>
    </div>
  );
}

export default TaskDetail;
