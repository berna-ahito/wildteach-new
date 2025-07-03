import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ViewAll from "./ViewAll";
import "../../Pages/Styles/shared/CommonComponents.css";

export default function RecentActivity({ recent, role = "tutor" }) {
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    console.log("🗑️ Delete not implemented for item id:", id);
  };

  // ✅ Filter out "New tutor registered" activity if role is tutor
  const filteredRecent =
    role === "tutor"
      ? recent.filter((r) => r.content !== "New tutor registered")
      : recent;

  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>Recent Activity</h3>
        <button className="seeall-btn" onClick={() => setOpen(true)}>
          View All
        </button>
      </div>

      <ul>
        {filteredRecent.length > 0 ? (
          filteredRecent.slice(0, 3).map((r, i) => (
            <li key={i} className="panel-item">
              <div className="avatar-circle">{r.avatar}</div>
              <div className="activity-details">
                <div className="info">
                  <strong>{r.name}</strong> • {r.subject || r.content} • {r.time}
                </div>
                <span className={`status ${r.status}`}>
                  {r.status?.charAt(0).toUpperCase() + r.status?.slice(1)}
                </span>
              </div>
            </li>

          ))
        ) : (
          <li className="panel-item">
            <div className="info">No recent activity at this time.</div>
          </li>
        )}
      </ul>

      {/* 💬 View All Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          Recent Activity
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ViewAll
            data={filteredRecent}
            type="activity"
            handleDelete={handleDelete}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
