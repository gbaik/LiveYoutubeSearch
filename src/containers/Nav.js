import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Logout from '../components/Logout.js';
import Search from './Search.js';

import { searchVideo } from '../stores/Display/actions';

const Nav = ({ handleVideoSearch, history }) => (
  <div className = 'nav'>
    <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>
    <Logout />
  </div>
);

const updateVideo = (videoSearchText) => (dispatch => (
  axios.get(`/search?query=${videoSearchText}`)
    .then(videos => (
      dispatch(searchVideo(videos))
    ))
));

const mapDispatchToProps = (dispatch) => (
  {
    handleVideoSearch: (history, videoSearchText) => (
      dispatch(updateVideo(videoSearchText))
        .then(() => (
          history.push(`/results?search_query=${videoSearchText}`)
        ))
    )
  }
);

export default connect(null, mapDispatchToProps)(Nav);