import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Plans} from "./components/Plans/Plans";
import {Levels} from "./components/Levels/Levels";
import { Schemes } from './components/Schemes/Schemes';
import { Users } from './components/Users/Users';
import useToken from './components/useToken';
import MyChart from './MyChart';

function App() {
  const { token, setToken } = useToken();

  return (
    <div className="App">
        <Router>
          <switch>
            <Route path='/' exact render={() => (<> <Login/></>)}/>
            <Route path='/plans' render={() => (<> <Plans/></>)}/>
            <Route path='/levels' render={() => (<> <Levels/></>)}/>
            <Route path='/schemes' render={() => (<> <Schemes/></>)}/>
            <Route path='/users' render={() => (<> <Users/></>)}/>
            <Route path='/login' render={() => (<> <Login/></>)}/>
            <Route path='/mychart' render={()=>(<><MyChart/></>)}/>
          </switch>
        </Router>
    </div>
  );
}

export default App;
