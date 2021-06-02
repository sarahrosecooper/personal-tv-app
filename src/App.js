import React from "react";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AllLogged from "./components/AllLogged";
import Finished from "./components/Finished";
import Disliked from "./components/Disliked";
import EyeOut from "./components/EyeOut";
import Favorited from "./components/Favorited";
import LandingPage from "./components/LandingPage";
import TopFive from "./components/TopFive";
import WantToWatch from "./components/WantToWatch";
import CurrentlyWatching from "./components/CurrentlyWatching";
import SingleShow from "./components/SingleShow";
import AllResults from "./components/AllResults";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />

      {/*// FIXME If I am logged in, register LandingPage if I am not logged in, register Login page, or maybe create a separate page to login // */}

      {/* SECTION ROUTES */}
      <Route path="/home">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/all">
        <AllLogged />
      </Route>
      <Route path="/finished">
        <Finished />
      </Route>
      <Route path="/disliked">
        <Disliked />
      </Route>
      <Route path="/keepAnEyeOut">
        <EyeOut />
      </Route>
      <Route path="/favorited">
        <Favorited />
      </Route>
      <Route path="/topFive">
        <TopFive />
      </Route>
      <Route path="/wantToWatch">
        <WantToWatch />
      </Route>
      <Route path="/currentlyWatching">
        <CurrentlyWatching />
      </Route>
      <Route path="/singleShow/:showId">
        <SingleShow />
      </Route>
      <Route path="/allResults/">
        <AllResults />
      </Route>
    </div>
  );
}

export default App;
