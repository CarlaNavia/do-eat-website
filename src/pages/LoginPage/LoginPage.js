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
      <div>
        <h1 className="login-title">Login</h1>
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
       <br/>
          <button className="task-form-button">Log in</button>
          <br/>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
        <button onClick={signInWithGoogle} className="task-form-button">
          Sign in with Google
        </button>
        <Link to={"/register"}>Register</Link>
      </div>
    );
  }
}
export default LoginPage;
