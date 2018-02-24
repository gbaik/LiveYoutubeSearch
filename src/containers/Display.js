import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Login from '../components/Login.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

import { searchVideo } from '../stores/Display/actions';

class Display extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { history, liveChatId, videos, handleVideoSearch, handleMessageSend } = this.props;
    
    return (
      <div>
        <Switch>                          
          <Route exact path = '/' >
            <Login />
          </Route>
          <Route path = '/results' >
            <div>
              <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>
              <VideoList history = { history } />
              <a  href='/logout'> Logout </a>
            </div>
          </Route>
          <Route path = '/watch'>
            <div>
              <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>                  
              <VideoPlayer onSubmit = { event => handleMessageSend(liveChatId, event.videoChatText) }/>
              <a  href='/logout'> Logout </a>                  
            </div>
          </Route>
        </Switch>        
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

const sendMessage = (liveChatId, videoChatText) => (dispatch => (
  axios.get(`/send/message?liveChatId=${liveChatId}&message=${videoChatText}`)
));

const mapStateToProps = (state) => ({ liveChatId: state.Display.liveChatId });

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (history, videoSearchText) => (
      dispatch(updateVideo(videoSearchText))
        .then(() => (
          history.push(`/results?search_query=${videoSearchText}`)
        ))
    ),
    handleMessageSend: (liveChatId, videoChatText) => {
      if (videoChatText) {
        dispatch(sendMessage(liveChatId, videoChatText))
      }
    }
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Display));