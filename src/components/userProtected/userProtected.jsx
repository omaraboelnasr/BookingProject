import React, { useContext } from 'react';
import { authenticationContext } from '../../context/authentication';
import { Navigate } from 'react-router-dom';

const UserProtected = ({children}) => {
    const {isAuth} =  useContext(authenticationContext)
    if(!isAuth){
        return children
    }else{
        return <Navigate to='/'/>
    }
}

export default UserProtected;
