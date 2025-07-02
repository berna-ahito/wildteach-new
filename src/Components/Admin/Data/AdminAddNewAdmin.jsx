import React, { useState } from "react";
import axios from "axios";
import Card from "../../Shared/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Pages/Styles/Admin.css";

export default function AdminAddNewAdmin({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/admin/addAdmin", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "admin"
      });

      if (response.status === 200 || response.status === 201) {
        if (onAdd) onAdd(); // Refresh admin list if needed
        setFormData({ name: "", email: "", password: "" });
        setOpen(false);
      }
    } catch (err) {
      console.error("Failed to add admin:", err);
      setError("Failed to add admin. Please try again.");
    }
  };

  return (
    <>
      <Card
        title="Add New Admin"
        content="+"
        className="stat-card add-announcement-card"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <span className="page-title">Add New Admin</span>
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
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="toggle-btn"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="toggle-btn"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="toggle-btn"
              required
            />

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="toggle-btn active submit-btn">
              Add Admin
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}