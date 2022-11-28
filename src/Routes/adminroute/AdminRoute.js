import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if(loading || adminLoading){
        return <Loading/>
    }
    if(user && isAdmin){
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;