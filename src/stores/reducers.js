import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import videoPlayer from "./VideoPlayer/reducer";

export default combineReducers({
  form: formReducer,
  videoPlayer
})