export default (navigate) => [
  { text: "Home", onClick: () => navigate('/tutor/home') },
  { text: "Manage Sessions", onClick: () => navigate('/tutor/manageSessions') },
  { text: "Profile", onClick: () => navigate('/tutor/profile') },
  { text: "Contact Us", onClick: () => navigate('/tutor/contactUs') },
  { text: "Settings", onClick: () => navigate('/tutor/settings') },
  { text: "Logout" }
];