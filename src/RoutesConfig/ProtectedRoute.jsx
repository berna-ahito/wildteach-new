import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, allowedRoles, userRole }) => {
  console.log("[ProtectedRoute]", {
    isLoggedIn,
    userRole,
    allowedRoles,
  });

  // Redirect immediately if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Redirect if role is not allowed
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the element if allowed
  return element;
};

export default ProtectedRoute;
