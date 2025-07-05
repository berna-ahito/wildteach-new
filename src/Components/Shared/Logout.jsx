// import React from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button
// } from '@mui/material';

// export default function LogoutDialog({ open, onClose, onConfirm }) {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Confirm Logout</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Are you sure you want to logout? This action will end your current session.
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={onConfirm} color="error" variant="contained">
//           Logout
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }


import React, { useState } from 'react';
import '../../Pages/Styles/Logout.css';

export default function LogoutDialog({ open, onClose, onConfirm }) {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    setLoggedOut(true);
    setTimeout(() => {
      onConfirm(); 
    }, 1800); 
  };

  if (!open) return null;

  return (
    <div className="logout-dialog-overlay">
      <div className="logout-dialog">
        {!loggedOut ? (
          <>
            <div className="logout-dialog-title">Are you sure you want to logout?</div>
            <div className="logout-dialog-actions">
              <button className="logout-dialog-btn cancel" onClick={onClose}>Cancel</button>
              <button className="logout-dialog-btn logout" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <div className="logout-success">
            <div className="swal-circle">
              <div className="checkmark"></div>
            </div>
            <div className="logout-success-text">You've successfully logged out.</div>
          </div>
        )}
      </div>
    </div>
  );
}
