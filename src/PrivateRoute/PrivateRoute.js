import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider'

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='mt-3'><Spinner variant="primary" animation='border'></Spinner></div>
    }
    if(user?.uid){
        return children;
    }
    
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
  
}
