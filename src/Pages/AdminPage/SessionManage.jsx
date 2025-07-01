import AdminSessionData from '../../Components/Admin/Data/AdminSessionData';
import DashboardLayout from '../../Components/Layout/DashboardLayout';
import AdminSessionTable from '../../Components/Admin/Data/AdminSessionTable';
import useBookings from '../../Components/Admin/Data/AdminBooking';
import '../../Pages/Styles/Admin.css';

export default function SessionManage() {
  const bookings = useBookings(); // fetches real data

  return (
    <div>
      <DashboardLayout title="Session Management" role="admin">
        <div className='Page'>
         
          <AdminSessionData />
          <AdminSessionTable bookings={bookings} />
        </div>
      </DashboardLayout>
    </div>
  );
}
  