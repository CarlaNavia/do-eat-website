import React, { Component } from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import { Link } from "react-router-dom";
import TaskService from "../../lib/task-service";
// import "./TaskDetailsPage.css";

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

  //   deleteTask = () => {
  //     const { params } = this.props.match;
  //     axios
  //       .delete(`http://localhost:4000/api/v1/todos/${params.id}`)
  //       .then(() => {
  //         this.props.history.push("/");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  componentDidMount() {
    this.getATask();
  }

  render() {
    return (
      <div className="detail-page ">
        <div className="action-btn">
          <Link to={"/"}>
            <img className="icons" src="../../../goback.png" alt="back" />
          </Link>
          <div className="actions">
            <Link to={`/edit/${this.state.aTask._id}`}>
              <img
                className="icons margin_buttons"
                src="../../../edit.png"
                alt="edit"
              />
            </Link>
            {/* <button className="delete-btn" onClick={() => this.deleteTask()}>
              <img className="icons" src="../../../delete.png" alt="delete" />
            </button> */}
          </div>
        </div>
        <TaskDetail eachDetail={this.state.aTask} />
      </div>
    );
  }
}

export default TaskDetailsPage;
