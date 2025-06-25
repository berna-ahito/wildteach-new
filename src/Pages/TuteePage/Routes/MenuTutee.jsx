export default (navigate) => [
  { text: "Home", onClick: () => navigate('/tuteeDashboard') },
  { text: "My Bookings", onClick: () => navigate('/my-bookings') },

  {
    text: "Logout",
    onClick: () => {
        navigate('/login');
      
    }
  }
];
