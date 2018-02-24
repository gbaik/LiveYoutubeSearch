import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import Display from './Display/reducer';

export default combineReducers({
  form: formReducer,
  Display
})