import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AdminViewAll from '../Admin/Data/AdminViewAll'; // Adjust path if needed

export default function Announcement({ announcements = [], onRefresh }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>System Announcements</h3>
        <button className="add-btn" onClick={() => setOpen(true)}>View All</button>
      </div>

      <ul>
        {announcements.length > 0 ? (
          announcements.slice(0, 4).map((a, i) => (
            <li key={i} className="panel-item">
              <div className="avatar-circle">{a.title?.[0] || '?'}</div>
              <div className="info">
                <strong>{a.title}</strong> • {a.content}
              </div>
              <span className="status new">New</span>
            </li>
          ))
        ) : (
          <li className="panel-item">
            <div className="info">No new announcements at this time.</div>
          </li>
        )}
      </ul>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>
          System Announcements
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <AdminViewAll title="System Announcements" onRefresh={onRefresh} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
