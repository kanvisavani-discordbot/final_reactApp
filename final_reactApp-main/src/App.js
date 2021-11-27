import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import FileBase64 from 'react-file-base64';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Plans} from "./components/Plans/Plans";
import {Profile} from "./components/Profile/Profile";
import {Setting} from "./components/Settings/Setting";
import {Levels} from "./components/Levels/Levels";
import { Schemes } from './components/Schemes/Schemes';
import { Users } from './components/Users/Users';
import useToken from './components/useToken';
import MyChart from './MyChart';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
        <Router>
          <switch>
          <Route exact path="/"> <Login/> </Route>
            <Route path="/plans"> <Plans/> </Route>
            <Route path="/levels"> <Levels/> </Route>
            <Route path="/schemes"> <Schemes/> </Route>
            <Route path="/users"> <Users/> </Route>
            <Route path="/mychart"> <MyChart/> </Route>
            <Route path="/profile"> <Profile/> </Route>
            <Route path="/setting"> <Setting/> </Route>
          </switch>
        </Router>
    </div>
  );
}

export default App;
