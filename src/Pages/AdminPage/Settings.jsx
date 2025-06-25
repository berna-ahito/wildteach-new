import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import getAdminMenu from "./Routes/menuAdmin";
import Card from "../../Components/Card"; // ← Make sure this path is correct
import '../Styles/Admin.css';

export default function Settings() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <div className="admin-dashboard">
        <Sidebar menuItems={menuItems} />
        <div className="content">
          <Header title="SETTINGS" />
          
          <div className="settings-grid">
            {/* Card 1: Account Settings */}
            <Card title="Account Settings" className="settings-card">
              <p>Email: admin@example.com</p>
              <button>Change Password</button>
            </Card>

            {/* Card 2: Theme Settings */}
            <Card title="Theme Preferences" className="settings-card">
              <label>
                <input type="checkbox" /> Enable Dark Mode
              </label>
            </Card>

            {/* Card 3: Notifications */}
            <Card title="Notification Settings" className="settings-card">
              <label>
                <input type="checkbox" /> Email Alerts
              </label>
              <label>
                <input type="checkbox" /> Push Notifications
              </label>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
