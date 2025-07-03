const menuTutee = (navigate) => [
  { text: "Home", onClick: () => navigate('/tuteeDashboard') },
  { text: "Find Tutor", onClick: () => navigate('/tutee/findTutor') },
  { text: "My Bookings", onClick: () => navigate('/tutee/my-bookings') },
  { text: "Profile", onClick: () => navigate('/tutee/profile') },
  { text: "About Us", onClick: () => navigate('/tutee/about-us') },
  { text: "Contact Us", onClick: () => navigate('/tutee/contact-us') },
  { text: "Settings", onClick: () => navigate('/tutee/settings-tutee') },
  {
    text: "Logout",
    onClick: () => {
      localStorage.clear();
      navigate('/login');
    }
  }
];

export default menuTutee;

