import React from "react";
import { Switch, Route } from "react-router-dom";
import Reporter from "./containers/Reporter";
import Planner from "./containers/Planner";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";

function App() {
  return (
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
  );
}

export default App;
