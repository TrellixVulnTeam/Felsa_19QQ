import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import RegaloCodigo from '../pages/RegaloCodigo';
import Policyty from '../pages/Policy'


import '../assets/styles/global.scss'
         


function App() {
    return (
      <BrowserRouter>
       <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/regalo" component={RegaloCodigo}></Route>
                <Route exact path="/policy" component={Policyty}></Route>



        </Switch>
      
      
      </BrowserRouter>

      
   
       );
}

export default App
