import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reporter from "./containers/Reporter";
import Planner from "./containers/Planner";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/report">
          <Reporter />
        </Route>
        <Route exact path="/">
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
