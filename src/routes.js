import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Notes from './containers/Notes';
import About from './components/About';


export default (
  <Route path="/" component={App}>
     <IndexRoute component={Notes}/>
     <Route path="/about" component={About}></Route>
  </Route>
)
