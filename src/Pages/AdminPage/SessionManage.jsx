import DashboardLayout from "../../Components/Layout/DashboardLayout";
import AdminSessionData from "../../Components/Admin/Data/AdminSessionData";
import AdminSessionTable from "../../Components/Admin/Data/AdminSessionTable";
import useBookings from "../../Components/Admin/Data/AdminBooking";
import SectionHeader from "../../Components/Shared/LandingPage/SectionHeader";
import { useNavigate } from "react-router-dom";
import adminMenu from "../../RoutesConfig/menuAdmin";

import "../../Pages/Styles/Admin/Admin.css";

export default function SessionManage() {
  const navigate = useNavigate();
  const bookings = useBookings();

  return (
    <DashboardLayout
      title="WILDTEACH"
      role="admin"
      menuItems={adminMenu(navigate)}
    >
      <div className="admin-dashboard-section" style={{ marginTop: "40vw" }}>
        <SectionHeader
          badge="ADMIN PANEL"
          title="Manage"
          highlight="Sessions"
          subtitle="Track, manage, and monitor tutoring sessions in the system."
          layout="vertical"
        />

        <div className="glass-card statcard-wrapper">
          <AdminSessionData />
        </div>
        <div
          className="glass-card statcard-wrapper"
          style={{ minWidth: "55vw", minHeight: "40vw" }}
        >
          <AdminSessionTable bookings={bookings} />
        </div>
      </div>
    </DashboardLayout>
  );
}
