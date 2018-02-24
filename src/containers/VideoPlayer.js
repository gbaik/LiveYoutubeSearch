import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';

import Chat from './Chat.js';

const RenderField = (field) => {
  const { meta: { touched, error, warning }} = field; 

  return (
    <input type="text" {...field.input} />
  )
};

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
          <Field name = 'videoChatText' component =  { RenderField } />  
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
