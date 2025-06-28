import React from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';

export default function TuteeProfilePersonal({ profile, editPersonal, setEditPersonal, handleChange }) {
  return (
    <Box className="tutee-panel-card" style={{ marginBottom: '32px' }}>
      <Box className="tutee-panel-header">
        <Typography variant="h6">Personal Information</Typography>
        <Button className="tutee-view-button" onClick={() => setEditPersonal(!editPersonal)}>
          {editPersonal ? 'Save' : 'Edit'}
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Birth"
            type="date"
            value={profile.dob}
            onChange={handleChange('dob')}
            fullWidth
            InputLabelProps={{ shrink: true }}
            disabled={!editPersonal}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            value={profile.phone}
            onChange={handleChange('phone')}
            fullWidth
            disabled={!editPersonal}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            value={profile.address}
            onChange={handleChange('address')}
            fullWidth
            disabled={!editPersonal}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
