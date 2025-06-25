export default (navigate) => [
  { text: "Home", onClick: () => navigate('/tuteeDashboard') },
  { text: "Find Tutor", onClick: () => navigate('/findTutor') },
  { text: "My Bookings", onClick: () => navigate('/my-bookings') },
  { text: "Profile", onClick: () => navigate('/tutee/profile') },
  { text: "About Us", onClick: () => navigate('/tutee/aboutUs') },
  { text: "Contact Us", onClick: () => navigate('/tutee/contactUs') },
  { text: "Settings", onClick: () => navigate('/tutee/settings') },

  {
    text: "Logout",
    onClick: () => {
      navigate('/login');

    }
  }
];
