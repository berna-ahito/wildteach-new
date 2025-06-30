import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminStudent from "../../Components/Admin/Data/AdminStudent"
import AdminUsersStat from "../../Components/Admin/Data/AdminUsersStat"

import "../../Pages/Styles/Admin.css";

export default function ManageUsers() {
  return (
    <DashboardLayout title="Manage Users" role="admin">
      <AdminUsersStat/>
      <AdminStudent />
    </DashboardLayout>
  );
}