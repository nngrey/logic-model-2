import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Notes from './containers/Notes';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Notes}/>
  </Route>
)
