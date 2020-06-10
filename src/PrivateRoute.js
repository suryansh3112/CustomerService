import React from "react";
import { AdminPanel, History, PlaceOrder, Navbar } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function PrivateRoute() {
  return (
    <Router>
      <Route
        path="/AdminPanel"
        render={(props) => {
          return <AdminPanel />;
        }}
      />

      <Route
        path="/PlaceOrder"
        render={(props) => {
          return <PlaceOrder />;
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
}

export default PrivateRoute;
