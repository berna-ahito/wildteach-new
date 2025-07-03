import React from 'react';
import UserTable from "../../Shared/UserTable";
import "../../../Pages/Styles/Admin/Admin.css"; 
export default function AdminManageTable({ data = [], roleFilter }) {
  return (
    <div className="admin-manage-table">
      <UserTable data={Array.isArray(data) ? data : []} roleFilter={roleFilter} />
    </div>
  );
}
