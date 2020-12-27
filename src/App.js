import withFirebaseAuth from "react-with-firebase-auth";
import "./App.css";
import React, { Component } from "react";
import { firebaseAppAuth, providers } from "./config/firebase";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import NewTask from "./pages/NewTaskPage/NewTaskPage";
import Navbar from "./components/Navbar/Navbar";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage";
import EditTask from "./pages/EditTask/EditTask";

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithEmailAndPassword,
      error,
      createUserWithEmailAndPassword,
    } = this.props;
    return (
      <div>
        <Navbar signOut={signOut} user={user} />
        <Switch>
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                user={user}
                signInWithGoogle={signInWithGoogle}
                signInWithEmailAndPassword={signInWithEmailAndPassword}
                error={error}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register
                {...props}
                user={user}
                signInWithGoogle={signInWithGoogle}
                error={error}
                createUserWithEmailAndPassword={createUserWithEmailAndPassword}
              />
            )}
          />
          <PrivateRoute exact user={user} path="/" component={TasksPage} />
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
          <PrivateRoute
            exact
            user={user}
            path="/edit/:taskId"
            component={EditTask}
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
