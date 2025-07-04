import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, allowedRoles, userRole }) => {
  console.log("[ProtectedRoute]", {
    isLoggedIn,
    userRole,
    allowedRoles,
  });

  // Not logged in ➜ redirect to unauthorized
  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Logged in but role not allowed ➜ redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Authorized access
  return element;
};

export default ProtectedRoute;
