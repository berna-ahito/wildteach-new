import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import menuTutee from '../../RoutesConfig/MenuTutee';
import useFindTutorData from '../../Components/Tutee/Data/useFindTutorData';
import FindTutorPanel from '../../Components/Tutee/Panels/FindTutorPanel';
import '../../Pages/Styles/TuteePage.css';

export default function FindTutor() {
  const navigate = useNavigate();
  const menuItems = menuTutee(navigate);

  const {
    searchTerm,
    setSearchTerm,
    filteredTutors
  } = useFindTutorData();

  return (
    <div className="tutee-dashboard bright-theme">
      <Sidebar menuItems={menuItems} />
      <div className="tutee-content">
        <Header title="WILDTEACH" />
        <FindTutorPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          tutors={filteredTutors}
          navigate={navigate}
        />
      </div>
    </div>
  );
}
