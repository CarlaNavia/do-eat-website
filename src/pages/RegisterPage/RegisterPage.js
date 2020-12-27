import React, { Component } from "react";

class RegisterPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(event, propertyName) {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  handleRegistered = (event) => {
    event.preventDefault();
    this.props
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
   
  };
  render() {
    const { user, error } = this.props;
    if (user) {
        this.props.history.push("/");
      }
    return (
      <div>
        <h1 className="login-title">Register</h1>
        <form onSubmit={this.handleRegistered}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(event) => this.handleChange(event, "email")}
          />
          <label>PasswordRegistered:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button>Register</button>
        </form>
      </div>
    );
  }
}
export default RegisterPage;
