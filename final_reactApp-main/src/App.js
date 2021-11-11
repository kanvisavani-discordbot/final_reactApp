import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'datatables.net';
import 'jquery';
import {Login} from './components/Login/Login';
import {Plans} from "./components/Plans/Plans";
import {Levels} from "./components/Levels/Levels";
import { Schemes } from './components/Schemes/Schemes';

function App() {
  return (
    <div className="App">
        <Router>
          <switch>
            <Route path='/' exact render={() => (<> <Login/></>)}/>
            <Route path='/plans' render={() => (<> <Plans/></>)}/>
            <Route path='/levels' render={() => (<> <Levels/></>)}/>
            <Route path='/schemes' render={() => (<> <Schemes/></>)}/>
          </switch>
        </Router>
    </div>
  );
}

export default App;
