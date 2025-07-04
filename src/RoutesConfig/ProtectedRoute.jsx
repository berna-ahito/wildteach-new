import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, allowedRoles, userRole }) => {
  console.log("[ProtectedRoute]", {
    isLoggedIn,
    userRole,
    allowedRoles,
  });

  // Still initializing
  if (isLoggedIn === undefined || userRole === null) return null;

  // 🚫 Not logged in → redirect to login
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  // ❌ Logged in but role not allowed → redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Authorized → render the element
  return element;
};

export default ProtectedRoute;
