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

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Login />{" "}
      {/*// FIXME If I am logged in, register LandingPage if I am not logged in, register Login page, or maybe create a seperate page to login // */}
      <LandingPage />
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
      <Route path="/keepaneyeout">
        <EyeOut />
      </Route>
      <Route path="/favorited">
        <Favorited />
      </Route>
      <Route path="/topfive">
        <TopFive />
      </Route>
      <Route path="/wanttowatch">
        <WantToWatch />
      </Route>
      <Route path="/currentlywatching">
        <CurrentlyWatching />
      </Route>
    </div>
  );
}

export default App;
