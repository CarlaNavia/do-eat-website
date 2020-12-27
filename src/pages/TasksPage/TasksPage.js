import React, { Component } from "react";
import TaskService from "../../lib/task-service";
import TaskList from "../../components/TaskList/TaskList";
import "./TasksPage.css";

class TasksPage extends Component {
  state = {
    listOfTasks: [],
  };
  getAllTasks = () => {
    TaskService.getMyTasks(this.props.user.uid)
      .then((responseFromApi) => {
        this.setState({
          listOfTasks: responseFromApi,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  updateTaskStatus = (id, isDone) => {
    TaskService.editOneTask(id, { isDone }).then(() => {
      this.getAllTasks();
    });
  };
  componentDidMount() {
    this.getAllTasks();
  }
  render() {
    return (
      <div>
        <h1 className="home-title">What do I need to EAT?</h1>
        <TaskList
          eachTask={this.state.listOfTasks}
          updateTaskStatus={this.updateTaskStatus}
        />
      </div>
    );
  }
}
export default TasksPage;
