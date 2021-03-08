import React from "react";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AllLogged from "./components/AllLogged";
import Completed from "./components/Completed";
import Disliked from "./components/Disliked";
import EyeOut from "./components/EyeOut";
import Favorited from "./components/Favorited";
import LandingPage from "./components/LandingPage";
import TopFive from "./components/TopFive";
import WantToWatch from "./components/WantToWatch";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Login />
      <LandingPage />
      {/* SECTION ROUTES */}
      <Route path="/home">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/saved">
        <AllLogged />
      </Route>
      <Route path="/completed">
        <Completed />
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
    </div>
  );
}

export default App;
