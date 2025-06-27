import Sidebar from "../../Components/Shared/Sidebar";
import Header from "../../Components/Shared/Header";
import { useNavigate } from "react-router-dom";
import getAdminMenu from "../../RoutesConfig/menuAdmin";
import Card from "../../Components/Shared/Card"; 
import '../Styles/TutorPage.css'; 

export default function Settings() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="content">
        <Header title="SETTINGS" />
        <h1 style={{ marginBottom: '32px' }}>Admin Settings</h1>

        <div className="settings-grid">
          {/* 1. Account Settings */}
          <Card title="Account Settings" className="stat-card settings-card">
            <p>Email: <strong>admin@example.com</strong></p>
            <button className="add-btn">Change Password</button>
          </Card>

          {/* 2. Theme Settings */}
          <Card title="Theme Preferences" className="stat-card settings-card">
            <label>
              <input type="checkbox" /> Enable Dark Mode
            </label>
          </Card>

          {/* 3. Notification Settings */}
          <Card title="Notification Settings" className="stat-card settings-card">
            <label>
              <input type="checkbox" /> Email Alerts
            </label>
            <br />
            <label>
              <input type="checkbox" /> Push Notifications
            </label>
          </Card>

          {/* 4. System Language */}
          <Card title="System Language" className="stat-card settings-card">
            <select defaultValue="en">
              <option value="en">English</option>
              <option value="fil">Filipino</option>
              <option value="es">Spanish</option>
              <option value="jp">Japanese</option>
            </select>
          </Card>

          {/* 5. Privacy Preferences */}
          <Card title="Privacy Preferences" className="stat-card settings-card">
            <label>
              <input type="checkbox" /> Share analytics usage
            </label>
            <br />
            <label>
              <input type="checkbox" /> Allow cookie tracking
            </label>
          </Card>
        </div>
      </div>
    </div>
  );
}
