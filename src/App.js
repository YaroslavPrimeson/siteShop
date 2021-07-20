import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/index'
import Admin from './Admin/index'
const App = ({ store }) => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/account' component={Landing}/>
      </Switch>
    </BrowserRouter>
);
export default App