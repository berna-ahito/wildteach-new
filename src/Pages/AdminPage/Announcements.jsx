import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import getAdminMenu from './Routes/menuAdmin';
import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card';
export default function Announcements() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="WildTeach" />
      <Sidebar menuItems={menuItems} />
      <div style={{ marginTop: '-80px', paddingRight: '370px' }}>
        <h1>Announcements</h1>
        <Card
          title="Latest Announcement"
          content="Testing Admin Announcement"
          style={{ width: '1000px', height: '150px'}}/>
          <div style={{ marginTop: '30px',display: 'flex', flexWrap: 'wrap', gap: '16px' }}> 
              <Card
                  title="Create New Announcement"
                  content="+"
                  style={{ marginTop: '30px', width: '100px', height: '150px', margin: '0 16px' }}/>
              <Card 
                  title="View All Announcements"
                  content="View"
                  style={{ marginTop: '30px', width: '100px', height: '150px', margin: '0 16px' }}/>
          </div>
      
      </div>
    </>
  );
}