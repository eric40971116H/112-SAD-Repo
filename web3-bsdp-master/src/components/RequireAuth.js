import React from "react";
import { useAuth } from "../context/authprovider";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/Login" />;
  }
  return children;
};
