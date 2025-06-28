import AdminSessionData from '../../Components/Admin/Data/AdminSessionData';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import bookings from '../../Components/Admin/Data/AdminBooking';
import AdminSessionTable from '../../Components/Admin/Data/AdminSessionTable';
import '../../Pages/Styles/Admin.css'; // Importing Admin styles
export default function SessionManage() {
  return (
  <div>
    <DashboardLayout title = "Session Management" role = "admin">
        <div className='Page'>
          <AdminSessionData />
          <AdminSessionTable bookings={bookings} />
        </div>
       
    </DashboardLayout>
  </div>
  );
}
