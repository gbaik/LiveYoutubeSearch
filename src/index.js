import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

// import reducer from "./store/reducers"
import videoPlayer from "./stores/VideoPlayer/reducer";
import middleware from "./stores/middleware";

import VideoPlayer from "./components/videoPlayer.js";

const store = createStore(videoPlayer, middleware);

const App = () => (
  <Provider store={store}> 
    <VideoPlayer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
