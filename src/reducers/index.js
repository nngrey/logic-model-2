import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {noteReducer} from './noteReducer';

export default combineReducers({
  noteState:noteReducer,
  routing
})
