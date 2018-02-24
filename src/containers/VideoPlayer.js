import axios from 'axios';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Chat from '../components/Chat.js';
import RenderField from '../components/RenderField.js';

class VideoPlayer extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { video, messages, videoId, handleSubmit } = this.props;

    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
        <div>{ video.snippet.title }</div>      
        <div>{ video.snippet.description }</div>
        {messages.map((message, index) => (
          <Chat message = { message.snippet } key = { index }/>
        ))}
        <form onSubmit = { handleSubmit }>
          <Field name = 'videoChatText' component = { RenderField } />  
          <button type = 'submit'>Send</button>
        </form>
    </div>
    );
  };
}

const mapStateToProps = (state) => ({
  video: state.Display.video,
  messages: state.Display.messages
});

VideoPlayer = connect(mapStateToProps)(VideoPlayer);

export default reduxForm({
  form: 'Chat'
})(VideoPlayer);
