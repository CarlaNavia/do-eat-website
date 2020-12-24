import withFirebaseAuth from "react-with-firebase-auth";
import "./App.css";
import React, { Component } from "react";
import { firebaseAppAuth, providers } from "./config/firebase";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <Switch>
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              user={user}
              signOut={signOut}
              signInWithGoogle={signInWithGoogle}
            />
          )}
        />
        <PrivateRoute
          exact
          user={user}
          path="/"
          component={() => <h1>TASKS PRIVATE ROUTE</h1>}
        />
      </Switch>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
