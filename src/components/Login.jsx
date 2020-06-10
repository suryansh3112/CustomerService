import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [info, setInfo] = useState({ username: "", password: "" });

  async function check(a, p) {
    try {
      const res = await axios.get("http://localhost:5000/user/" + a);
      if (res.data[0].password === p) {
        props.sn(res.data[0].name);

        props.li();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    let a = info.username;
    let p = info.password;

    check(a, p);

    console.log(info);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="card">
      <div className="card-header">Login Page</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={info.username}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={info.password}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={handleLogin}>
            Login
          </button>
          <Link to="/register">
            <button className="btn btn-warning btn-block">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
