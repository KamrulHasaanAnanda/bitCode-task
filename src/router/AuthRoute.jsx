import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  let organizationId = localStorage.getItem("organizations");

  return organizationId ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoute;
