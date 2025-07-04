import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ViewAll({
  data = [],
  type = "announcements",
  handleDelete,
}) {
  const isTutorActivity = type === "activity" && data[0]?.subject;

  return (
    <div className="Page">
      <div className="manage-users-header"></div>

      <div className="admin-manage-table">
        {data.length > 0 ? (
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  {type === "announcements" ? (
                    <>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Title
                      </th>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Message
                      </th>
                    </>
                  ) : isTutorActivity ? (
                    <>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Name
                      </th>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Subject
                      </th>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Status
                      </th>
                    </>
                  ) : (
                    <>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Name
                      </th>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Activity
                      </th>
                      <th style={{ textAlign: "left", padding: "12px" }}>
                        Status
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    {type === "announcements" ? (
                      <>
                        <td style={{ padding: "12px" }}>{item.title}</td>
                        <td style={{ padding: "12px" }}>{item.message}</td>
                      </>
                    ) : isTutorActivity ? (
                      <>
                        <td style={{ padding: "12px" }}>{item.name}</td>
                        <td style={{ padding: "12px" }}>{item.subject}</td>
                        <td
                          style={{
                            padding: "12px",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.status}
                        </td>
                      </>
                    ) : (
                      <>
                        <td style={{ padding: "12px" }}>{item.name}</td>
                        <td style={{ padding: "12px" }}>
                          {item.content || "—"}
                        </td>
                        <td
                          style={{
                            padding: "12px",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.status}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ padding: "16px" }}>No {type} to display.</p>
        )}
      </div>
    </div>
  );
}
