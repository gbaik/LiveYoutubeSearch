import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducer from "./stores/reducers"
import middleware from "./stores/middleware";

import VideoPlayer from "./containers/videoPlayer.js";

const store = createStore(reducer, middleware);

const App = () => (
  <Provider store={store}> 
    <VideoPlayer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
