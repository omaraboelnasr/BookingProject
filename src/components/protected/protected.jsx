import React, { useContext } from 'react';
import { authenticationContext } from '../../context/authentication';
import UserProfile from '../../pages/userProfile/userProfile';
import { Navigate } from 'react-router-dom';

const Protected = () => {
    const {isAuth,setAuth} =  useContext(authenticationContext)
    if(isAuth){
        return <UserProfile/>
    }else{
        return <Navigate to='/login'/>
    }
}

export default Protected;
