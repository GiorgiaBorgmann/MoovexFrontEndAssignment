import { Route, Redirect } from 'react-router-dom';
import LogIn from './LogIn'

function PublicRoute (props) {
    
    return (
        <Route path="/" exact>
            {props.token ?
                <Redirect to="/posts" />
            : <LogIn />}
        </Route>
    );
};

export default PublicRoute;