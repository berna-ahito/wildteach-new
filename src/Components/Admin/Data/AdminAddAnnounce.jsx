import React, { useState } from "react";
import axios from "axios";
import Card from "../../Shared/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Pages/Styles/Admin.css";

export default function AdminAddAnnounce({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      try {
        const response = await axios.post("http://localhost:8080/announcement/addAnnounce", {
          title: title,
          message: content,
          created_at: new Date().toISOString(),
          admin: {
            admin_id: 1 // Replace with dynamic admin_id if needed
          }
        });

        if (response.status === 200 || response.status === 201) {
          if (onAdd) onAdd(); // ✅ refresh announcements
          setTitle("");
          setContent("");
          setOpen(false);
        }
      } catch (error) {
        console.error("Error adding announcement:", error);
        alert("Failed to add announcement. Please try again.");
      }
    }
  };

  return (
    <>
      <Card
        title="Create New"
        content="+"
        className="stat-card add-announcement-card"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <span className="page-title">Add Announcement</span>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit} className="add-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="toggle-btn"
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="toggle-btn"
              rows={4}
              required
            />
            <button type="submit" className="toggle-btn active submit-btn">
              Add
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
