import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Style/Style.css';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push('/asdfasdf');

    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      console.log(resp.status === 200 ? 'logged in' : 'NOT logged in');
      if (resp.status === 200) {
        // put the user id into the context
        this.props.history.push('/dashboard');
      }
    });
  };

  return (
    <div className="outer-wrapper">
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit} method="POST">
          <label>
            <p>Email</p>
            <input
              value={username}
              type="email"
              placeholder="Email"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              password={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div>
            <button type="submit">Log in</button>
          </div>
          <div>
            <Link to="/signup">
              <button src="/Signup">Sign up now!!!</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="recent-posts">
        <h2>Recent Interviews</h2>
      </div>
    </div>
  );
};

export default Login;
