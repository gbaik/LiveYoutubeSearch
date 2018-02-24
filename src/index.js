import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import Display from './containers/Display.js';
import middleware from './stores/middleware';
import reducer from './stores/reducers';

const history = createHistory();
const store = createStore(reducer, middleware);

const Root = () => (
  <Provider store={store}> 
    <Router history = { history } >  
      <Display />
    </Router>    
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
