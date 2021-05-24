import { Route, Redirect } from 'react-router-dom';
import LogIn from './LogIn'


function PublicRoute() {
    
    return (
        <Route exact path="/" >

            <LogIn />

        </Route>
    );
};

export default PublicRoute;