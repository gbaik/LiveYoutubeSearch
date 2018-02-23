import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Search from './Search.js';
import Login from './Login.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

import { searchVideo } from '../stores/Display/actions';

class Display extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { videos, handleVideoSearch } = this.props;    
    const history = createHistory();
    
    return (
      <div>
        <Router history = { history }>
          <div>
            <Route>
              <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>
            </Route>
            <Switch>
              <Route exact path = '/' >
                <Login />
              </Route>
              <Route path = '/results' >
                <VideoList history = { history }/>
              </Route>
              <Route path = '/watch'>
                <VideoPlayer />
              </Route>
            </Switch>        
          </div>
        </Router>
      </div>
    );
  };
};

const updateVideo = (videoSearchText) => (dispatch => (
    axios.get(`/action?search_query=${videoSearchText}`)
      .then(videos => (
        dispatch(searchVideo(videos))
      ))
  )
);

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (history, videoSearchText) => (
      dispatch(updateVideo(videoSearchText))
        .then(() => (
          history.push('/results')
        ))
    )
  }
);

export default connect(null, mapDispatchToProps)(Display);