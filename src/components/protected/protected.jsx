import React, { useContext } from 'react';
import { authenticationContext } from '../../context/authentication';
import { Navigate } from 'react-router-dom';
import UserProfile from '../../pages/userProfile/userProfile';

const Protected = ({children}) => {
    const {isAuth} =  useContext(authenticationContext)
    if(isAuth){
        return children
    }else{
        return <Navigate to='/login'/>
    }
}

export default Protected;
