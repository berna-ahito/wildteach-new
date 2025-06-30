// import SettingsTuteePanel from '../../Components/Tutee/Panels/SettingsTuteePanel';

// export default function SettingsTutee() {
//   return <SettingsTuteePanel />;
// }


import React from 'react';
import Sidebar from '../../Components/Shared/Sidebar';
import Header from '../../Components/Shared/Header';
import menuTutee from '../../RoutesConfig/MenuTutee';
import { useNavigate } from 'react-router-dom';
import SettingsTuteePanel from '../../Components/Tutee/Panels/SettingsTuteePanel';
import '../../Pages/Styles/TuteePage.css';

export default function SettingsTutee() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        <div className="settings-container">
          <SettingsTuteePanel />
        </div>
      </div>
    </div>
  );
}
