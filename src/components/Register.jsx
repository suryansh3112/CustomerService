import React, { useState } from "react";
import qs from "qs";
import axios from "axios";

function Register() {
  const [info, setInfo] = useState({ name: "", username: "", password: "" });

  function handleRegister(e) {
    e.preventDefault();
    let message = "Something went wrong";
    console.log(info);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("http://localhost:5000/user/createUser", qs.stringify(info), config)
      .then((res) => {
        alert(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location = "/";
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
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={info.name}
              className="form-control"
              required
            />
          </div>
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
          <button
            className="btn btn-primary btn-block"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
