import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          WebApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/AdminPanel" className="nav-link">
                Admin-Panel
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/PlaceOrder" className="nav-link">
                Place-Order
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/History" className="nav-link">
                History
              </Link>
            </li>
            {props.status && (
              <li className="nav-item ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    props.lo();
                  }}
                >
                  Log-out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
