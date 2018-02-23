import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducer from "./stores/reducers"
import middleware from "./stores/middleware";

import Display from "./containers/Display.js";

const store = createStore(reducer, middleware);

const App = () => (
  <Provider store={store}> 
    <Display />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
