import React from "react";

const Signup = () => {
  return (
    <div id="wrapper">
      <div id="div2">
        <form>
          <h1>Create an account</h1>
          <p>It's free and always will be.</p>
          <li>
            <input type="text" placeholder="First Name" id="firstname" />
            <input type="text" placeholder="lastname" id="lastname" />
          </li>
          <li>
            <input type="text" placeholder="Email address" />
          </li>
          <li>
            <input type="text" placeholder="Re-enter email address" />
          </li>
          <li>
            <input type="password" placeholder="New password" />
          </li>
          <p>Birthday</p>
          <li>
            <select>
              <option>Day</option>
            </select>
            <select>
              <option>Month</option>
            </select>
            <select>
              <option>Year</option>
            </select>
          </li>
          <li>
            <input type="submit" value="Create an account" />
          </li>
          <li id="create_page">
            <a href="/dashboard">Create a Page</a>
          </li>
        </form>
      </div>
    </div>
  );
};

export default Signup;
