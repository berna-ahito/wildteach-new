import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Pages/Styles/Admin.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ToastNotification from "../../Panels/ToastNotification";
import DeleteDialog from "../../Panels/DeleteDialog";

export default function AdminViewAll({ title = "All Announcements", onRefresh }) {
  const [announcementList, setAnnouncementList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "" });

  // Fetch announcements
  useEffect(() => {
    axios
      .get("http://localhost:8080/announcement/getAllAnnounce")
      .then((response) => {
        const data = response.data;
        setAnnouncementList(data.reverse()); // newest first
      })
      .catch((error) => {
        console.error("Failed to load announcements:", error);
        setToast({ message: "Could not load announcements.", type: "error" });
      });
  }, []);

  // Open confirmation dialog
  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  // Confirm delete
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/announcement/delete/${selectedItem.announcement_id}`);
      const updatedList = announcementList.filter(
        (item) => item.announcement_id !== selectedItem.announcement_id
      );
      setAnnouncementList(updatedList);
      setToast({ message: "Announcement deleted successfully.", type: "success" });

      // 🔁 Trigger parent to refresh dashboard/preview list
      if (onRefresh) {
        onRefresh();
      }
    } catch (error) {
      console.error("Failed to delete announcement:", error);
      setToast({ message: "Error deleting announcement. Please try again.", type: "error" });
    } finally {
      setOpenDialog(false);
      setSelectedItem(null);
    }
  };

  // Auto-hide toast
  useEffect(() => {
    if (toast.message) {
      const timer = setTimeout(() => setToast({ message: "", type: "" }), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="Page">
      <div className="admin-manage-table">
        {announcementList.length > 0 ? (
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px" }}>Title</th>
                  <th style={{ textAlign: "left", padding: "12px" }}>Message</th>
                  <th style={{ textAlign: "left", padding: "12px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {announcementList.map((item) => (
                  <tr key={item.announcement_id}>
                    <td style={{ padding: "12px" }}>{item.title}</td>
                    <td style={{ padding: "12px" }}>{item.message}</td>
                    <td style={{ padding: "12px" }}>
                      <IconButton color="error" onClick={() => handleOpenDialog(item)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ padding: "16px" }}>No announcements to display.</p>
        )}
      </div>

      {/* Delete confirmation dialog */}
      <DeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleConfirmDelete}
        itemTitle={selectedItem?.title}
      />

      {/* Toast Notification */}
      {toast.message && (
        <ToastNotification message={toast.message} type={toast.type} />
      )}
    </div>
  );
}
