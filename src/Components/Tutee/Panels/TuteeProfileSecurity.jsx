import React from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';

export default function TuteeProfileSecurity({ profile, editSecurity, setEditSecurity, handleChange }) {
  return (
    <Box className="tutee-panel-card">
      <Box className="tutee-panel-header">
        <Typography variant="h6">Privacy & Security</Typography>
        <Button className="tutee-view-button" onClick={() => setEditSecurity(!editSecurity)}>
          {editSecurity ? 'Save' : 'Edit'}
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Current Password"
            type="password"
            placeholder="Enter current password"
            value={profile.currentPassword}
            onChange={handleChange('currentPassword')}
            fullWidth
            disabled={!editSecurity}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={profile.newPassword}
            onChange={handleChange('newPassword')}
            fullWidth
            disabled={!editSecurity}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            value={profile.confirmPassword}
            onChange={handleChange('confirmPassword')}
            fullWidth
            disabled={!editSecurity}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
