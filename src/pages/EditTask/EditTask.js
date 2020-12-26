import React, { Component } from "react";
import TaskService from "../../lib/task-service";

class EditTask extends Component {
  state = {
    currentTask: {},
  };

  getATask = () => {
    const { params } = this.props.match;
    TaskService.getOneTask(params.taskId)
      .then((responseFromApi) => {
        this.setState({
          currentTask: responseFromApi,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getATask();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    TaskService.editOneTask(this.state.currentTask.id, this.state.currentTask)
      .then(() => {
        this.props.history.push(`/task/${this.state.currentTask.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange(event, propertyName) {
    let copyTask = this.state.currentTask;
    copyTask[propertyName] = event.target.value;
    this.setState({
      currentTask: copyTask,
    });
  }

  render() {
    return (
      <div>
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit} className="task-form">
          <label className="label-form">Task:</label>
          <input
            type="text"
            className="input-form"
            name="title"
            value={this.state.currentTask.title}
            onChange={(event) => this.handleChange(event, "title")}
          />
          <br />
          <label className="label-form">Description:</label>
          <input
            type="text"
            name="description"
            className="input-form"
            value={this.state.currentTask.description}
            onChange={(event) => this.handleChange(event, "description")}
          />
          <br />
          <input type="submit" value="SAVE" className="task-form-button" />
        </form>
      </div>
    );
  }
}

export default EditTask;
