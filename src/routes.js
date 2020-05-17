import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre/Sobre';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import {autenticado} from './auth';





const Routes = () => {
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/sobre" component={Sobre}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Dashboard}/>
      
      
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;