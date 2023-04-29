import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return       <Spinner animation="border" variant="primary" />

    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;

/* 
* steps -----------------
* 1. checked user is logged in or not 
* 2. if user is logged in then allowed visit the route else redirect the user to the login page 
* 3. setup the private route
*4. handle loading



*/