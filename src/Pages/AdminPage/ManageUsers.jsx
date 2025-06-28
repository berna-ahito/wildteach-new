import { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminManageTable from "../../Components/Admin/Data/AdminManageTable";
import students from "../../Components/Admin/Data/AdminStudent";
import "../../Pages/Styles/Admin.css";

export default function ManageUsers() {
  const [view, setView] = useState("tutee");

  return (
    <DashboardLayout title="Manage Users" role="admin">
      <div className="manage-users-header">
        <h1 className="page-title">Manage Users</h1>
        <div className="button-toggle-group">
          <button
            className={`toggle-btn ${view === "tutee" ? "active" : ""}`}
            onClick={() => setView("tutee")}
          >
            View Tutees
          </button>
          <button
            className={`toggle-btn ${view === "tutor" ? "active" : ""}`}
            onClick={() => setView("tutor")}
          >
            View Tutors
          </button>
        </div>
      </div>

      <AdminManageTable data={students} roleFilter={view} />
    </DashboardLayout>
  );
}
