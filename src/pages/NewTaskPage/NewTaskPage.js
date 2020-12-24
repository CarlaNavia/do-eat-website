import React, { Component } from "react";
import "./NewTaskPage.css";
import TaskService from "../../lib/task-service";

class NewTask extends Component {
  state = {
    title: "",
    description: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const task = { title, description, userId: this.props.user.uid, isDone:false};
    TaskService.addNewTask(task)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (updatedInfo) => {
    const { name, value } = updatedInfo.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="task-form">
        <label className="label-form">Title:</label>
        <input
          type="text"
          name="title"
          className="input-form"
          value={this.state.title}
          onChange={(updatedInfo) => this.handleChange(updatedInfo)}
        />
        <br />

        <label className="label-form">Description:</label>
        <input
          type="text"
          name="description"
          className="input-form"
          value={this.state.description}
          onChange={(updatedInfo) => this.handleChange(updatedInfo)}
        />
        <br />
        <input type="submit" value="ADD NOW" className="task-form-button" />
      </form>
    );
  }
}

export default NewTask;
