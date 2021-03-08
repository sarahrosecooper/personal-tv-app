import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
