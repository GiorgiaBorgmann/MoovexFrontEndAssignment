import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts'

function PrivateRoute() {

    return (
        <Route path="/posts">
            <Posts />
        </Route>
    );
};

export default PrivateRoute;

