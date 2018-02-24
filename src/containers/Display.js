import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
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
    const { videos, handleVideoSearch, handleMessageSend } = this.props;    
    const history = createHistory();
    
    return (
      <div>
        <Router history = { history }>
          <div>
            <Switch>                          
              <Route exact path = '/' >
                <Login history = {history} />
              </Route>
              <Route path = '/results' >
                <div>
                  <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>
                  <VideoList history = { history }/>
                  <a  href="/logout"> Logout </a>
                </div>
              </Route>
              <Route path = '/watch'>
                <div>
                  <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>                  
                  <VideoPlayer onSubmit = { event => handleMessageSend(event.videoChatText) }/>
                  <a  href="/logout"> Logout </a>                  
                </div>
              </Route>
            </Switch>        
          </div>
        </Router>
      </div>
    );
  };
};

const updateVideo = (videoSearchText) => (dispatch => (
  axios.get(`/search?query=${videoSearchText}`)
    .then(videos => (
      dispatch(searchVideo(videos))
    ))
));

const sendMessage = (videoChatText) => (dispatch => (
  axios.get(`/send/message?message=${videoChatText}`)
));

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (history, videoSearchText) => (
      dispatch(updateVideo(videoSearchText))
        .then(() => (
          history.push('/results')
        ))
    ),
    handleMessageSend: (videoChatText) => (
      dispatch(sendMessage(videoChatText))
    )
  }
);

export default connect(null, mapDispatchToProps)(Display);