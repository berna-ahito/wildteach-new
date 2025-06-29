import React, { useState } from "react";
import "../../../Pages/Styles/Admin.css"; // Ensure correct relative path
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function AdminViewAll({ title = "All Items", items = [] }) {
  const [announcementList, setAnnouncementList] = useState(items);

  const handleDelete = (index) => {
    const updatedList = [...announcementList];
    updatedList.splice(index, 1);
    setAnnouncementList(updatedList);
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
                  <th style={{ textAlign: "left", padding: "12px" }}>Content</th>
                  <th style={{ textAlign: "left", padding: "12px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {announcementList.map((item, i) => (
                  <tr key={i}>
                    <td style={{ padding: "12px", maxWidth: "200px", wordWrap: "break-word" }}>{item.title}</td>
                    <td style={{ padding: "12px", maxWidth: "400px", wordWrap: "break-word" }}>{item.content}</td>
                    <td style={{ padding: "12px" }}>
                      <IconButton color="error" onClick={() => handleDelete(i)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ padding: "16px" }}>No items to display.</p>
        )}
      </div>
    </div>
  );
}
