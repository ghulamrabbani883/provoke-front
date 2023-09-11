import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const SecureRoute = () => {
    const [cookies, setCookie] = useCookies(["token"]);
    const location = useLocation()
    if (cookies.token) {
      setIsLogin(true);
      return <Outlet />;
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
}

export default SecureRoute
