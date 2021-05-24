import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Posts from './Posts'

function PrivateRoute(props) {
   
    return (
        <Route path="/posts" exact>
            {props.token ?
                <Posts/>
            : <Redirect to="/" exact />}
        </Route>
    );
};

export default PrivateRoute;