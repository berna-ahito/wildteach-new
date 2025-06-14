import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import getAdminMenu from './Routes/menuAdmin';
import { useNavigate } from 'react-router-dom';

export default function Announcements() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="Announcements" />
      <Sidebar menuItems={menuItems} />
      <div style={{ paddingTop: '80px', paddingLeft: '16px' }}>
        <h1>Announcements Page</h1>
        <p>This is where you can manage announcements.</p>
        {/* Add your announcement management components here */}
      </div>
    </>
  );
}