import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'


function PublicRoutes({children, user}) {

    if(user) 
    {
        return <Navigate to={'/'} replace={true}/>
    }

    return <Outlet />;
}

export default PublicRoutes;
