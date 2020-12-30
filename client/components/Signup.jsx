import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [cur_salary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if passwords match before submit
    if (password !== password2) {
      alert("password does not match");
    } else {
      fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          cur_salary,
          dob,
        }),
      }).then((resp) => {
        console.log(resp.status === 200 ? "logged in" : "NOT logged in");
        if (resp.status === 200) {
          history.push("/dashboard");
        }
      });
    }
  };

  return (
    <div id="wrapper">
      <div id="div2">
        <form onSubmit={handleSubmit} id="list">
          <h1>Create an account</h1>
          <li>
            First name:
            <input
              type="text"
              placeholder="  Ex: John"
              id="firstname"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </li>
          <li>
            Last Name:
            <input
              type="text"
              placeholder=" Ex: Doe"
              id="lastname"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </li>
          <li>
            Email address:
            <input
              type="email"
              placeholder=" Ex: johnDoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>
          <li>
            Enter Password:
            <input
              type="password"
              placeholder=" Six characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </li>
          <li>
            Re-Enter password:
            <input
              type="password"
              placeholder=" Same password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </li>
          <li>
            Enter Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
          </li>
          <li>
            Salary
            <input
              type="number"
              placeholder="Salary"
              value={cur_salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </li>
          <li>
            <input type="submit" value="Create an account" />
          </li>
        </form>
      </div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Signup;
