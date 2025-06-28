const menuAdmin = (navigate) => [
  { text: "Dashboard", onClick: () => navigate('/adminDashboard') },
  { text: "Manage Users", onClick: () => navigate('/admin/manageUsers') },
  { text: "Session Manage", onClick: () => navigate('/admin/sessionManage') },
  { text: "Announcements", onClick: () => navigate('/admin/announcements') },
  { text: "Settings", onClick: () => navigate('/admin/settings') },
  {
    text: "Logout",
    onClick: () => {
      navigate('/login');
    }
  }
];

export default menuAdmin;
