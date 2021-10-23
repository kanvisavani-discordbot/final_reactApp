import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Plans} from "./components/Plans/Plans";

function App() {
  return (
    <div className="App">
        <Router>
          <switch>
            <Route path='/' exact render={() => (<> <Login/></>)}/>
            <Route path='/plans' exact render={() => (<> <Plans/></>)}/>
          </switch>
        </Router>
    </div>
  );
}

export default App;
