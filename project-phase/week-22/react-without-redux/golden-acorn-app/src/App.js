import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

import Navbar from './components/Navbar';
import WithStates from './components/WithStates';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content"></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/simple/states">
            <WithStates />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
