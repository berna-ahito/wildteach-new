import React from "react";
import useMyBookingsData from "../../Tutee/Data/useMyBookingsData";

export default function MyBookingsPanel() {
  const {
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    filteredBookings,
    months,
    years,
  } = useMyBookingsData();

  const hasBookings = filteredBookings.length > 0;

  return (
    <div className="my-bookings-wrapper">
      <div className={`my-bookings-content ${hasBookings ? "scrollable-bookings" : ""}`}>
        <div className="my-bookings-section-title">My Bookings</div>

        {/* Filters */}
        <div className="filter-container">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="filter-select"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === "All" ? "All Years" : year}
              </option>
            ))}
          </select>

          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="filter-select"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month === "All" ? "All Months" : month}
              </option>
            ))}
          </select>

          <button
            className="clear-filter-btn"
            onClick={() => {
              setSelectedYear("All");
              setSelectedMonth("All");
            }}
          >
            Clear
          </button>
        </div>

        {/* Booking Cards */}
        {hasBookings ? (
          <div className="my-bookings-scrollable-container">
            <div className="my-bookings-cards-container">
              {filteredBookings.map((b, idx) => {
                const sessionDate = new Date(new Date(b.sessionDateTime).getTime());
                const formattedDate = sessionDate.toLocaleDateString();
                const formattedTime = sessionDate.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div className="tutee-card" key={idx}>
                    <div className="tutee-card-item">
                      <div className="content">
                        <strong>Tutor:</strong> {b.tutor.student.first_name}{" "}
                        {b.tutor.student.last_name}
                      </div>
                    </div>
                    <div className="card-divider"></div>
                    <div className="bookings-card-container">
                      <div className="content">
                        <strong>Subject:</strong> {b.subject}
                      </div>
                    </div>
                    <div className="bookings-card-container">
                      <div className="content">
                        <strong>Date:</strong> {formattedDate}
                      </div>
                    </div>
                    <div className="bookings-card-container">
                      <div className="content">
                        <strong>Time:</strong> {formattedTime}
                      </div>
                    </div>
                    <div className="bookings-card-container">
                      <div className="content">
                        <strong>Status:</strong>
                        <span className={`tutee-status ${b.status.toLowerCase()}`}>
                          {" "}
                          {b.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>No bookings found.</div>
        )}
      </div>
    </div>
  );
}
