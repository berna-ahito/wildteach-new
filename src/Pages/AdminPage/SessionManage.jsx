import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import getAdminMenu from './Routes/menuAdmin';

export default function ManageUsers() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="Manage Users" />
      <Sidebar menuItems={menuItems} />
      <div style={{ paddingTop: '80px', paddingLeft: '16px' }}>
        <h1>Manage Users Page</h1>
        <p>This is where you can manage users.</p>
        {/* Add your user management components here */}
      </div>
    </>
  );
}