import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reporter from "./containers/Reporter";
import Planner from "./containers/Planner";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/report">
          <Reporter />
        </Route>
        <Route exact path="/plan">
          <Planner />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
