import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("authUser");
  if (isLoggedIn && (isLoggedIn == "true" || isLoggedIn == true)) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }

};

export default PrivateRoutes;
