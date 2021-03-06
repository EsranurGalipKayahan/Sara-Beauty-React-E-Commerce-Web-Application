import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  const location = useLocation();
  const auth = isAuth || location?.state?.auth || false;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location, auth, navigated: true }} />
  );
};
export default ProtectedRoute;
