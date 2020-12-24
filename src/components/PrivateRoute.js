import React from "react";
import { Route, Redirect } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth, providers } from "../config/firebase";

function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} user={user} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
