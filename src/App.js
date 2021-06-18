import React from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Finished from "./components/Finished";
import Disliked from "./components/Disliked";
import KeepUp from "./components/KeepUp";
import Favorited from "./components/Favorited";
import Homepage from "./components/Homepage";
import TopFive from "./components/TopFive";
import WatchList from "./components/WatchList";
import CurrentlyWatching from "./components/CurrentlyWatching";
import SingleShow from "./components/SingleShow";
import AllResults from "./components/AllResults";

import { Link, Route, Switch } from "react-router-dom";

// Just landing page for routes, etc

function App() {
  return (
    <div>
      <Navigation />

      {/* SECTION ROUTES */}
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/finished">
        <Finished />
      </Route>
      <Route path="/disliked">
        <Disliked />
      </Route>
      <Route path="/keepup">
        <KeepUp />
      </Route>
      <Route path="/favorited">
        <Favorited />
      </Route>
      <Route path="/topfive">
        <TopFive />
      </Route>
      <Route path="/watchlist">
        <WatchList />
      </Route>
      <Route path="/currentlywatching">
        <CurrentlyWatching />
      </Route>
      <Route path="/singleshow/:showId">
        <SingleShow />
      </Route>
      <Route path="/allresults/">
        <AllResults />
      </Route>
    </div>
  );
}

export default App;
