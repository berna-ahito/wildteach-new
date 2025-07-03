import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, allowedRoles, userRole }) => {
  // Still initializing
  if (isLoggedIn === undefined || userRole === null) return null;

  // Not logged in
  if (!isLoggedIn) return <Navigate to="/unauthorized" replace />;

  // Logged in but not authorized
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;
