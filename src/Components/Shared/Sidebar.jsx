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
import tutorMenu from "../../RoutesConfig/MenuTutor";
import adminMenu from "../../RoutesConfig/menuAdmin";
import tuteeMenu from "../../RoutesConfig/MenuTutee"; 

export default function Sidebar(props) {
  const { role = 'tutor', menuItems: passedMenuItems } = props;
  const [open, setOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();
  
  const menuItems = passedMenuItems || (
    role === 'admin'
      ? adminMenu(navigate)
      : role === 'tutee'
      ? tuteeMenu(navigate)
      : tutorMenu(navigate)
  );

  const handleIconClick = () => setOpen(prev => !prev);
  const handleLogoutConfirm = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 20, zIndex: 1301 }}>
        <IconButton
          aria-label="open drawer"
          onClick={handleIconClick}
          edge="start"
          sx={{
            background: 'linear-gradient(135deg, #89343B, #F8C400)',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(137, 52, 59, 0.3)',
            borderRadius: '12px',
            padding: '10px',
            marginTop: '20px',
            '&:hover': {
              background: '#F8C400',
              color: '#89343B',
              transform: 'scale(1.05)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{
          sx: {
            background: '#fffaf5',
            width: 250,
            paddingTop: '80px',
            boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <List>
          {menuItems.map((item, idx) => (
            <ListItem
              button
              key={idx}
              onClick={() => {
                if (item.text === 'Logout') setLogoutDialogOpen(true);
                else item.onClick?.();
                setOpen(false);
              }}
              sx={{
                px: 3,
                py: 1.5,
                mb: 1,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#F8C40022',
                },
                '& .MuiListItemText-primary': {
                  color: '#89343B',
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>

      <LogoutDialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
