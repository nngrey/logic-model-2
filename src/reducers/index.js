import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { noteReducer } from './noteReducer';
import { laneReducer } from './laneReducer';
import { authReducer } from './authReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  noteState: noteReducer,
  laneState: laneReducer,
  form: formReducer,
  authState: authReducer,
  routing
})
