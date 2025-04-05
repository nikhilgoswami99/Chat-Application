import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'


function ProtectedRoutes({children, user}) {

    if(!user) 
    {
        return <Navigate to={'/login'} replace={true}/>
    }

    return <Outlet />;
}

export default ProtectedRoutes
