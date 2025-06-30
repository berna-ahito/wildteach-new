import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Pages/Styles/Admin.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function AdminViewAll({ title = "All Announcements" }) {
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/announcement/getAllAnnounce")
      .then((response) => {
        const data = response.data;
        setAnnouncementList(data.reverse()); // newest first
      })
      .catch((error) => {
        console.error("Failed to load announcements:", error);
        alert("Could not load announcements.");
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      try {
        await axios.delete(`http://localhost:8080/announcement/delete/${id}`);
        const updatedList = announcementList.filter(
          (item) => item.announcement_id !== id
        );
        setAnnouncementList(updatedList);
      } catch (error) {
        console.error("Failed to delete announcement:", error);
        alert("Error deleting announcement. Please try again.");
      }
    }
  };

  return (
    <div className="Page">
      <div className="manage-users-header">
      </div>

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
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(item.announcement_id)}
                      >
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
    </div>
  );
}
