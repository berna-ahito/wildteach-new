import UserTable from "../../Shared/UserTable"; 
import '../../../Pages/Styles/Admin.css'; // Import the Admin.css for styling

export default function AdminManageTable({ data, roleFilter }) {
  return (
    <div className="admin-manage-table">
      <UserTable data={data} roleFilter={roleFilter} />
    </div>
  );
}
