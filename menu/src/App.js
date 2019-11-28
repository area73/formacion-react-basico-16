import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>

          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/help">Ayuda</Link>
          </li>
        </ul>
      </div>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Help">
          <Help />
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
