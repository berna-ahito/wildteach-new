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
        {recent.map((item, i) => (
          <li key={i} className="panel-item">
            <div className="avatar-circle">
              {item.avatarUrl ? (
                <img src={item.avatarUrl} alt="avatar" className="avatar-img" />
              ) : (
                <span>{item.avatar}</span>
              )}
            </div>
            <div className="activity-details">
              <div className="info">
                <strong>{item.name}</strong> • {item.subject || item.content}
              </div>
              <span className={`status ${item.status}`}>
                {item.status?.charAt(0).toUpperCase() + item.status?.slice(1)}
              </span>
            </div>
          </li>
        ))}
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
