import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../containers/Search.js';
import VideoPlayer from '../containers/VideoPlayer.js';
import VideoList from '../containers/VideoList.js';

const Display = ({}) => (
  <div>
    <Search />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <VideoPlayer />
        </Route>
        <Route path="/search">
          <VideoList />
        </Route>      
      </Switch>
    </BrowserRouter>
  </div>
);

export default Display;