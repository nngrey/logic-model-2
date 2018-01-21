import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Notes from './containers/Notes';
import About from './components/About';
import Lanes from './containers/Lanes';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Notes}/>
     <Route path="/about" component={About}></Route>
     <Route path="/lanes" component={Lanes}></Route>
  </Route>
)
