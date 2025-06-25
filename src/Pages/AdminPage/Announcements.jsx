import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import getAdminMenu from './Routes/menuAdmin';
import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card';
import '../Styles/TutorPage.css'; // Make sure to import the CSS

export default function Announcements() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="content">
        <Header title="ANNOUNCEMENTS" />
        
        <h1 style={{ marginBottom: '32px' }}>Admin Announcements</h1>

        <Card
          title="Latest Announcement"
          content="Testing Admin Announcement"
          className="stat-card"
          style={{ width: '100%', height: '150px' }}
        />

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <Card
            title="Create New"
            content="+"
            className="stat-card"
            style={{ width: '220px', height: '150px' }}
          />
          <Card
            title="View All"
            content="View"
            className="stat-card"
            style={{ width: '220px', height: '150px' }}
          />
        </div>
      </div>
    </div>
  );
}
