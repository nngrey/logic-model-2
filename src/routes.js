import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import About from './components/About';
import Lanes from './containers/Lanes';
import SignIn from './containers/SignIn';
import SignOut from './containers/SignOut';
import Register from './containers/Register';
import LogicModels from './containers/LogicModels';
import LogicModel from './containers/LogicModel';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={LogicModels}/>
     <Route path="/about" component={About}></Route>
     <Route path="/sign-in" component={SignIn} />
     <Route path="/sign-out" component={SignOut} />
     <Route path="/register" component={Register} />
     <Route path="/logic-models" component={LogicModels} />
     <Route path="/logic-models/:id" component={LogicModel} />
  </Route>
)
