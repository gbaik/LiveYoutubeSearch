import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(
  thunk,
  promiseMiddleware(), 
  // logger
);

export default middleware;
