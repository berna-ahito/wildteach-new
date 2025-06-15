import React, { useState } from 'react';
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutDialog from './Logout'; 
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ menuItems = [] }) {
  const [open, setOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setOpen((prev) => !prev);
  };

  const handleLogoutConfirm = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 12,
          left: 16,
          zIndex: 1301,
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleIconClick}
          edge="start"
        >
          <MenuIcon sx={{ color: open ? 'primary.main' : 'white' }} />
        </IconButton>
      </div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <List style={{ marginTop: 60 }}>
          {menuItems.map((item, idx) => (
            <ListItem
              button
              key={idx}
              onClick={() => {
                if (item.text === 'Logout') {
                  setLogoutDialogOpen(true); // show dialog
                } else {
                  if (item.onClick) item.onClick();
                }
                setOpen(false); // close drawer
              }}
              sx={{
                cursor: 'pointer',
                '&:hover .MuiListItemText-primary': {
                  color: 'primary.main',
                  borderRadius: '4px',
                  transition: 'color 0.3s ease',
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>

      {/* Logout confirmation dialog */}
      <LogoutDialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
