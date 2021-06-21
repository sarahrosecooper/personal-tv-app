import React from "react";
import Navigation from "./components/Navigation";
import AllResults from "./components/AllResults";
import Homepage from "./components/Homepage";
import SingleShow from "./components/SingleShow";

import { Link, Route, Switch } from "react-router-dom";

// Just landing page for routes, etc

function App() {
  return (
    <div>
      <Navigation />

      {/* SECTION ROUTES */}
      <Switch>
        <Route path="/home">
          <Homepage />
        </Route>

        <Route path="/allResults/result">
          <SingleShow />
        </Route>
        <Route path="/allResults">
          <AllResults />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
