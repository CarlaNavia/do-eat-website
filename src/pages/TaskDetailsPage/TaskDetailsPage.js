import React, { Component } from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import { Link } from "react-router-dom";
import TaskService from "../../lib/task-service";
import "./TaskDetailsPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons";


class TaskDetailsPage extends Component {
  state = {
    aTask: {},
  };

  getATask = () => {
    const { params } = this.props.match;
    TaskService
      .getOneTask(params.taskId)
      .then((responseFromApi) => {
        this.setState({
          aTask: responseFromApi,
        });
        console.log(responseFromApi, "API");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    deleteATask = () => {
      const { params } = this.props.match;
      TaskService
      .deleteOneTask(params.taskId)
        .then(() => {
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };

  componentDidMount() {
    this.getATask();
  }

  render() {
    return (
      <div className="detail-page ">
        <div className="action-btn">
          <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#34735c"/>
          </Link>
          <div className="actions">
            <Link to={`/edit/${this.state.aTask._id}`}>
            <FontAwesomeIcon icon={faEdit} size="lg" color="#34735c"/>
            </Link>
            <button className="delete-btn" onClick={() => this.deleteATask()}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#34735c"/>
            </button>
          </div>
        </div>
        <TaskDetail eachDetail={this.state.aTask} />
      </div>
    );
  }
}

export default TaskDetailsPage;
