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
    const task = {
      title,
      description,
      userId: this.props.user.uid,
      isDone: false,
    };
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
      <div>
        <h1 className="add-title">Are you missing something? <br/> Let's addEat!</h1>
        <form onSubmit={this.handleFormSubmit} className="task-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input-form"
            value={this.state.title}
            onChange={(updatedInfo) => this.handleChange(updatedInfo)}
          />
          <br />

          <input
            type="text"
            name="description"
            className="input-form"
            placeholder="Description, quantity..."
            value={this.state.description}
            onChange={(updatedInfo) => this.handleChange(updatedInfo)}
          />
          <br />
          <input type="submit" value="addEAT!" className="task-form-button" />
        </form>
      </div>
    );
  }
}

export default NewTask;
