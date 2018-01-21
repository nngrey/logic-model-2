import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { noteReducer } from './noteReducer';
import { laneReducer } from './laneReducer';


export default combineReducers({
  noteState:noteReducer,
  laneState:laneReducer,
  routing
})
