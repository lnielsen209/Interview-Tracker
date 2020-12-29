import React, { useState } from 'react';
import './components/Style/Style.css';
import Dashboard from '../client/components/Dashboard';
import Signup from '../client/components/Signup';
import Login from '../client/components/Login';
import useToken from './useToken';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
