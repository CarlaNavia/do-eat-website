import React, { Component } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

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
    this.props.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  };
  render() {
    const { user, error, signInWithGoogle } = this.props;
    if (user) {
      this.props.history.push("/");
    }
    return (
      <div  className="register-page">
        <h1 className="register-title">
          Welcome to doEAT! <br />
          In order to start using the application, you should be registered:
        </h1>
        <h2 className="expl-title">You can be registered with Google:</h2>
        <button onClick={signInWithGoogle} className="login-form-button">
          Sign in with Google
        </button>
        <br />
        <h2 className="expl-title">
          Or you can complete the login form with your email and your password:
        </h2>
        <form onSubmit={this.handleRegistered} className="task-form">
          <input
            className="input-form"
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={(event) => this.handleChange(event, "email")}
          />
          <br />
          <input
            type="password"
            name="password"
            className="input-form"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <br />
          <button className="register-form-button">Register</button>
        </form>
        <h2 className="expl-title">
          Please, click here in case that you already have an account:
        </h2>
        <Link to={"/login"} className="register-form-button">
          Log in
        </Link>
      </div>
    );
  }
}
export default RegisterPage;
