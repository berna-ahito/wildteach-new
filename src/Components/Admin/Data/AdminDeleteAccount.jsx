import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Shared/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Pages/Styles/Admin.css";

export default function AdminDeleteAccount({ onDelete }) {
  const [open, setOpen] = useState(false);
  const [adminList, setAdminList] = useState([]);
  const [selectedAdminId, setSelectedAdminId] = useState("");

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getAllAdmins");
      setAdminList(response.data);
    } catch (error) {
      console.error("Failed to fetch admins:", error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!selectedAdminId) return;

    try {
      await axios.delete(`http://localhost:8080/admin/deleteAdmin/${selectedAdminId}`);
      alert("✅ Admin account deleted successfully!");
      setSelectedAdminId("");
      setOpen(false);
      if (onDelete) onDelete(); // Refresh parent if needed
      fetchAdmins(); // Refresh admin list
    } catch (error) {
      console.error("❌ Failed to delete admin:", error);
      alert("Failed to delete admin.");
    }
  };

  return (
    <>
      <Card
        title="Delete Admin"
        content="-"
        className="stat-card add-announcement-card"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <span className="page-title">Delete Admin Account</span>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleDelete} className="add-form">
            <select
              className="toggle-btn"
              value={selectedAdminId}
              onChange={(e) => setSelectedAdminId(e.target.value)}
              required
            >
              <option value="">Select Admin to Delete</option>
              {adminList.map((admin) => (
                <option key={admin.admin_id} value={admin.admin_id}>
                  {admin.name} ({admin.email})
                </option>
              ))}
            </select>
            <button type="submit" className="toggle-btn active submit-btn" style={{ backgroundColor: "#d32f2f" }}>
              Delete
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
