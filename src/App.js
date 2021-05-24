import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Posts from './Components/Posts'

export default function App() {
  const [token, setToken] = useState('')
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[])
  // console.log(token)
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/abc">
           <Posts/>
          </Route>
          <PrivateRoute token = {token} />
          <PublicRoute token = {token}/>
          
          
        </Switch>
      </BrowserRouter>
    );
  
}
