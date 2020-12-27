import React from "react";
import "./TaskDetail.css"

function TaskDetail({ eachDetail }) {
  return (
    <div className="card-detail">
      <h2 className="title-detail-page">{eachDetail.title}</h2>
      <p>{eachDetail.description}</p>
    </div>
  );
}

export default TaskDetail;
