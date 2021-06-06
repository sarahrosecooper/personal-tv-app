import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import Searchbar from "./Searchbar";

// Nav bar

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="navigation-container">
          <li className="navigation-li">
            <Link className="navigation-a-link" to="/watchlist">
              watchlist
            </Link>
          </li>
          <li className="navigation-li">
            <Link className="navigation-a-link" to="/currentlywatching">
              currently watching
            </Link>
          </li>
          <li className="navigation-li">
            <Link className="navigation-a-link" to="/keepaneyeout">
              keep up
            </Link>
          </li>

          <li className="navigation-li">
            {/* NOTE within will be top 5 component?  */}
            <Link className="navigation-a-link" to="/favorited">
              favs
            </Link>
          </li>
          <li className="navigation-li">
            <Link className="navigation-a-link" to="/finished">
              finished
            </Link>
          </li>
          <li className="navigation-li">
            <Link className="navigation-a-link" to="/disliked">
              disliked
            </Link>
          </li>

          {/* // FIXME IF LOGGED IN, LOGIN, IF LOGGED OUT, LOGOUT */}
          {/* <li>
          <Link to="/login">login</Link>
        </li> */}
          <li className="navigation-li">
            <Link className="navigation-a-link" to="">
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
