import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';

export default function TuteeProfileAvatar() {
  return (
    <Box className="tutee-panel-card" style={{ marginBottom: '32px' }}>
      <Box display="flex" alignItems="center" gap={3}>
        <Avatar src="/default-profile.png" sx={{ width: 100, height: 100 }} />
        <Box flex={1}>
          <Typography variant="h6">Jane Doe</Typography>
          <Typography color="textSecondary">janedoe@example.com</Typography>
        </Box>
        <Button className="tutee-view-button">Edit</Button>
      </Box>
    </Box>
  );
}
