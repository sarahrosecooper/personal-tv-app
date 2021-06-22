import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import Searchbar from "./Searchbar";

// Nav bar

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__container">
          <li className="navigation__li">
            <Link className="navigation__a__link" to="/watchlist">
              watchlist
            </Link>
          </li>
          <li className="navigation__li">
            <Link className="navigation__a__link" to="/currentlywatching">
              currently watching
            </Link>
          </li>
          <li className="navigation__li">
            <Link className="navigation__a__link" to="/keepaneyeout">
              keep up
            </Link>
          </li>

          <li className="navigation__li">
            {/* NOTE within will be top 5 component?  */}
            <Link className="navigation__a__link" to="/favorited">
              favs
            </Link>
          </li>
          <li className="navigation__li">
            <Link className="navigation__a__link" to="/finished">
              finished
            </Link>
          </li>
          <li className="navigation__li">
            <Link className="navigation__a__link" to="/disliked">
              disliked
            </Link>
          </li>

          {/* // FIXME IF LOGGED IN, LOGIN, IF LOGGED OUT, LOGOUT */}
          {/* <li>
          <Link to="/login">login</Link>
        </li> */}
          <li className="navigation__li">
            <Link className="navigation__a__link" to="">
              logout
            </Link>
          </li>
        </ul>
      </nav>
      <Searchbar />
    </div>
  );
};

export default Navigation;
