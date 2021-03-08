import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul class="container">
        <li>
          <Link to="/all">all</Link>
        </li>
        <li>
          <Link to="/finished">finished</Link>
        </li>
        <li>
          <Link to="/currentlywatching">currently watching</Link>
        </li>
        <li>
          <Link to="/keepaneyeout">eye on</Link>
        </li>
        <li>
          {/* NOTE within will be top 5 component?  */}
          <Link to="/favorited">favorited</Link>{" "}
        </li>

        {/* // FIXME IF LOGGED IN, LOGIN, IF LOGGED OUT, LOGOUT */}
        {/* <li>
          <Link to="/login">login</Link>
        </li> */}
        <li>
          <Link>logout</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
