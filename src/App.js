import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  Login,
  Navbar,
  AdminPanel,
  History,
  PlaceOrder,
  Register,
} from "./components";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [name, setName] = useState("");

  function loggedIn() {
    setisLoggedIn(true);
  }

  function loggedOut() {
    setisLoggedIn(false);
    window.location = "/";
  }

  if (isLoggedIn) {
    return (
      <Router>
        <Navbar status={isLoggedIn} lo={loggedOut} />
        <Route
          path="/AdminPanel"
          render={(props) => {
            return <AdminPanel name={name} />;
          }}
        />
        <Route
          path="/PlaceOrder"
          render={(props) => {
            return <PlaceOrder name={name} />;
          }}
        />
        <Route
          path="/History"
          render={(props) => {
            return <History />;
          }}
        />
      </Router>
    );
  } else {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={(props) => (
            <Login
              {...props}
              status={isLoggedIn}
              li={loggedIn}
              lo={loggedOut}
              sn={setName}
            />
          )}
        />

        <Route
          path="/register"
          exact
          render={(props) => (
            <Register
              {...props}
              status={isLoggedIn}
              li={loggedIn}
              lo={loggedOut}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
