import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Posts from './Posts'

function PrivateRoute(props) {
   console.log(props.token)
    return (
        <Route path="/posts">
            {props.token ?
                <Posts/>
            : <Redirect to="/" exact />}
        </Route>
    );
};

export default PrivateRoute;

