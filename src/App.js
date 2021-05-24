import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';


export default function App() {
  const [token, setToken] = useState('')
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[])

  if (token) {
    return (
      <Router>
        <Switch>
          <PrivateRoute />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <PublicRoute />
        </Switch>
      </Router>
    );
  }
}
