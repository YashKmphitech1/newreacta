import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("authUser");
  if (isLoggedIn && (isLoggedIn == "true" || isLoggedIn == true)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }

};

export default PrivateRoutes;
