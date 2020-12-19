import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Style/Style.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="outer-wrapper">
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit} method="POST">
          <label>
            <p>Email</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>/
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Log in</button>
          </div>
          <div>
            <button fsrc="/Signup">Sign up now!!!</button>
          </div>
        </form>
      </div>
      <div className="recent-posts">
        <h2>Recent Interviews</h2>
      </div>
    </div>
  );
}
