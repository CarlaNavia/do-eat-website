import React, { Component } from "react";
import TaskService from "../../lib/task-service";

class TasksPage extends Component {
  state = {
    listOfTasks: [],
  };
  getAllTasks = () => {
    TaskService.getMyTasks(this.props.user.uid)
      .then((responseFromApi) => {
          console.log(responseFromApi, "response")
        this.setState({
          listOfTasks: responseFromApi.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getAllTasks();
  }
  render() {
    return <div></div>;
  }
}
export default TasksPage;
