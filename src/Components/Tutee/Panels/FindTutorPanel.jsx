import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function FindTutorPanel({
  searchTerm,
  setSearchTerm,
  tutors,
  navigate,
}) {
  const [open, setOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleOpen = (tutor) => {
    setSelectedTutor(tutor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTutor(null);
  };

  return (
    <div>
      <div className="find-tutor-container ">
        <h1>Find a Tutor</h1>
        <TextField
          label="Search by name or subject"
          variant="outlined"
          fullWidth
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="tutor-wrapper">
        <div className="tutoring-schedule-container">
          <div className="all-tutors-wrapper">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="find-tutor-card">
                <div className="tutor-info">
                  <span className="tutor-name">{tutor.name}</span>
                  {/* <span className="tutor-role">Status: {tutor.status}</span> */}
                </div>

                <div className="tutor-details-row">
                  <div className="tutor-details-text">
                    <div className="tutor-subject">
                      Subjects: {tutor.subjects}
                    </div>
                    <div className="tutor-subject">
                      Rate per Hour: {tutor.rate}
                    </div>
                    <div className="tutor-subject">
                      Availability: {tutor.availability}
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button
                      className="profile-button"
                      onClick={() => handleOpen(tutor)}
                    >
                      View Profile
                    </button>
                    <button
                      className="book-button"
                      onClick={() => {
                        if (tutor.tutor_id) {
                          navigate(`/book-tutor/${tutor.tutor_id}`);
                        } else {
                          alert("Tutor profile is incomplete.");
                        }
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {tutors.length === 0 && (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                No tutors found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal styled like a card */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className="modal-card-title">
          {selectedTutor?.name}'s Profile
        </DialogTitle>
        <Divider />
        <DialogContent className="modal-card-content">
          <Typography><strong>Subjects:</strong> {selectedTutor?.subjects}</Typography>
          <Typography><strong>Rate:</strong> {selectedTutor?.rate}</Typography>
          <Typography><strong>Availability:</strong> {selectedTutor?.availability}</Typography>
          
          <div style={{ textAlign: "right", marginTop: "24px" }}>
            <Button
              variant="contained"
              onClick={() => {
                navigate(`/book-tutor/${selectedTutor.tutor_id}`);
                handleClose();
              }}
              style={{ backgroundColor: "#89343b", color: "#fff8dc", borderRadius: "20px", padding: "10px 24px" }}
            >
              Book this Tutor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
