import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import Lanes from './containers/Lanes';
import Signin from './containers/Signin';
import Register from './containers/Register';


export default (
  <Route path="/" component={App}>
     <IndexRoute component={Lanes}/>
     <Route path="/about" component={About}></Route>
     <Route path="/signin" component={Signin} />
     <Route path="/register" component={Register} />
  </Route>
)
