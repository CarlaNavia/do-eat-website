import withFirebaseAuth from "react-with-firebase-auth";
import "./App.css";
import React, { Component } from "react";
import { firebaseAppAuth, providers } from "./config/firebase";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import NewTask from "./pages/NewTaskPage/NewTaskPage";
import Navbar from "./components/Navbar/Navbar";
import TasksPage from "./pages/TasksPage/TasksPage"
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage"

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div>
        <Navbar />
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
            component={TasksPage}
          />
          <PrivateRoute
            exact
            user={user}
            path="/new-task"
            component={NewTask}
          />
              <PrivateRoute
            exact
            user={user}
            path="/task/:taskId"
            component={TaskDetailsPage}
          />
        </Switch>
      </div>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
