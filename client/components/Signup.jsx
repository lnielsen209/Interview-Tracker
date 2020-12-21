import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [date, setDate] = useState(new Date());
  const [salary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if passwords match before submit
    if (password !== password2) {
      alert('password does not match');
    } else {
      fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          cur_salary: salary,
          DOB: date,
        }),
      }).then((data) => data.json());
    }
  };

  return (
    <div id="wrapper">
      <div id="div2">
        <form onSubmit={handleSubmit} id="list">
          <h1>Create an account</h1>

          <li>
            <input
              type="text"
              placeholder="First Name"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Re-Enter password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </li>
          <li>
            Enter Date of Birth
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </li>

          <li>
            Salary
            <input
              type="number"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </li>
          <li>
            <input type="submit" value="Create an account" />
          </li>
          <li id="create_page">
            <Link to="/dashboard">GOTO DASHBOARD</Link>
          </li>
        </form>
      </div>
    </div>
  );
};

export default Signup;
