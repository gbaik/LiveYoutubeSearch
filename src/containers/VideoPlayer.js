import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Chat from './Chat.js';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { video, messages, videoId } = this.props;

    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
        <div>{ video.snippet.title }</div>      
        <div>{ video.snippet.description }</div>
        {messages.map((message, index) => (
          <Chat message = { message.snippet } key = { index }/>
        ))}
    </div>
    );
  };
}

const mapStateToProps = (state) => ({
  video: state.Display.video,
  messages: state.Display.messages
});

export default connect(mapStateToProps)(VideoPlayer);
