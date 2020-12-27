import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange(event, propertyName) {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
    this.props.signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  };

  render() {
    const { user, signInWithGoogle, error } = this.props;
    if (user) {
      this.props.history.push("/");
    }

    return (
      <div className="login-page">
        <h1 className="login-title">
          Welcome to doEAT! <br />
          In order to start using the application, you should be logged in:{" "}
        </h1>
        <h2 className="expl-title">You can sign in with Google:</h2>
        <button onClick={signInWithGoogle} className="login-form-button">
          Sign in with Google
        </button>
        <br/>
        <h2 className="expl-title">
          Or you can complete the login form with your email and your password:
        </h2>

        <form onSubmit={this.handleLogin} className="task-form">
          <input
            type="email"
            name="email"
            className="input-form"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.handleChange(event, "email")}
          />
          <br />
          <input
            type="password"
            className="input-form"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
          <br />
          <button className="login-form-button">Log in</button>
          <br />
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
        <h2 className="expl-title">
          Please, click here in case that you need to be registered:
        </h2>
        <Link to={"/register"} className="login-form-button">
          Register
        </Link>
      </div>
    );
  }
}
export default LoginPage;
