import React from "react";
import Navigation from "./components/Navigation";
import Results from "./components/Results";
import Homepage from "./components/Homepage";
import SingleShow from "./components/SingleShow";
import "./styles/App.css";

import { Route, Switch } from "react-router-dom";

// Just landing page for routes, etc

function App() {
  return (
    <div className= "app">
      <Navigation />
      {/* SECTION ROUTES */}
      <Switch>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/allResults/result">
          <SingleShow />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
