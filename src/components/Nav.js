import React from 'react';

import Logout from './Logout.js';
import Search from '../containers/Search.js';

const Nav = ({ handleVideoSearch, history }) => (
  <div className = 'nav'>
    <Search onSubmit = { event => handleVideoSearch(history, event.videoSearchText)}/>
    <Logout />
  </div>
);

export default Nav;