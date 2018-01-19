// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {todoReducer} from './todoReducer';
import {noteReducer} from './noteReducer';

export default combineReducers({
  appState:appReducer,
  todoState:todoReducer,
  noteState:noteReducer,
  routing
  // More reducers if there are
  // can go here
})
