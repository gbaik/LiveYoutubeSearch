import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Login from '../components/Login.js';
import Search from './Search.js';
import Nav from './Nav.js'
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

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
            <div className = 'login'>
              <Login/>
            </div>
          </Route>
          <Route path = '/results' >
            <div className = 'results' >
              <Nav history = { history } />
              <VideoList history = { history } />
            </div>
          </Route>
          <Route path = '/watch'>
            <div className = 'watch' >
              <Nav history = { history } />
              <VideoPlayer onSubmit = { event => handleMessageSend(liveChatId, event.videoChatText) }/>
            </div>
          </Route>
        </Switch>        
      </div>
    );
  };
};

const sendMessage = (liveChatId, videoChatText) => (dispatch => (
  axios.get(`/send/message?liveChatId=${liveChatId}&message=${videoChatText}`)
));

const mapStateToProps = (state) => ({ liveChatId: state.Display.liveChatId });

const mapDispatchToProps = (dispatch) => (
  {
    handleMessageSend: (liveChatId, videoChatText) => {
      if (videoChatText) {
        dispatch(sendMessage(liveChatId, videoChatText))
      }
    }
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Display));