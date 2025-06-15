export default (navigate) => [
  { text: "Dashboard", onClick: () => navigate('/adminDashboard') },
  { text: "Manage Users", onClick: () => navigate('/manageUsers') },
  { text: "Session Manage", onClick: () => navigate('/sessionManage') },
  { text: "Announcements", onClick: () => navigate('/announcements') },
  { text: "Settings", onClick: () => navigate('/settings') },
  {
    text: "Logout",
    onClick: () => {
        navigate('/login');
      
    }
  }
];
