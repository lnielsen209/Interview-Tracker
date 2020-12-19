import React, { useState } from "react";
import "./components/Style/Style.css";
import Dashboard from "../client/components/Dashboard";
import Signup from "./components/Signup";
import Login from "../client/components/Login";
import useToken from "./useToken";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

// export default function Login() {
//   return (
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form>
//         <label>
//           <p>First name</p>
//           <input type="text" />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default App;
