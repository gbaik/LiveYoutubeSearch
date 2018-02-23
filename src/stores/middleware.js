import { applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promiseMiddleware from 'redux-promise-middleware';

const middleware = applyMiddleware(
  thunk,
  promiseMiddleware(), 
  // logger
);

export default middleware;
