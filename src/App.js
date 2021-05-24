import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

export default function App() {
  const [token, setToken] = useState('')
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[])
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute token = {token}/>
          <PrivateRoute token = {token} />
        </Switch>
      </BrowserRouter>
    );
  
}
