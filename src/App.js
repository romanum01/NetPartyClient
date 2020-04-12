import React from 'react';
import { Homepage } from './homepage'
import { Signup } from './signup'
import { Test } from './webRTC'
import { Login } from './login'
import { Admin } from './admin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Homepage} />
        <Route path="/party" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Homepage} />  
      </Switch>
      </Router>
    </>
  );
}

export default App;
