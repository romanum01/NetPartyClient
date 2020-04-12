import React from 'react';
import { Homepage } from './homepage'
import { Signup } from './signup'
import { Test } from './webRTC'
import { startWebRTC } from './webRTC'
import './App.css';

function App() {
  startWebRTC()
  return (
    <>
      <Test /> 
    </>
  );
}

export default App;
