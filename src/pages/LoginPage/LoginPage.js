import withFirebaseAuth from "react-with-firebase-auth";
import React, { Component } from "react";
import { firebaseAppAuth, providers } from "../../config/firebase";

class App extends Component {
  render() {
    if (this.props.user) {
      this.props.history.push("/");
    }
    return (
      <div className="App">
        <header className="App-header">
          {this.props.user ? (
            <p>Hello, {this.props.user.displayName}</p>
          ) : (
            <p>Please sign in.</p>
          )}
          {this.props.user ? (
            <button onClick={this.props.signOut}>Sign out</button>
          ) : (
            <button onClick={this.props.signInWithGoogle}>
              Sign in with Google
            </button>
          )}
        </header>
      </div>
    );
  }
}
export default App;
