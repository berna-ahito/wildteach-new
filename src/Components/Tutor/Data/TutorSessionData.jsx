import React, { useEffect, useState } from "react";
import SessionList from "../../Panels/SessionList";

export default function TutorSessionData() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const tutorId = localStorage.getItem("tutor_id");

  const fetchSessions = async () => {
    console.log("🔄 Fetching sessions for tutor:", tutorId);
    try {
      const res = await fetch(`http://localhost:8080/booking/tutor/${tutorId}`);
      if (!res.ok) throw new Error("Failed to fetch sessions");

      const data = await res.json();
      console.log("📦 Raw bookings:", data);

      const withPaymentStatus = await Promise.all(
        data.map(async (s) => {
          let isPaid = false;
          try {
            const payRes = await fetch(`http://localhost:8080/payment/byBookingId/${s.bookingId}`);
            if (payRes.ok) {
              const payments = await payRes.json();
              isPaid = payments.some((p) => p.status === "Completed");
              console.log(`💰 Booking ${s.bookingId} has completed payment:`, isPaid);
            } else {
              console.warn(`⚠️ No payments found for booking ${s.bookingId}`);
            }
          } catch (err) {
            console.warn("❌ Error checking payment for", s.bookingId, err);
          }

          return {
            booking_id: s.bookingId,
            name: `${s.student?.first_name} ${s.student?.last_name}`,
            subject: s.subject,
            date: new Date(s.sessionDateTime).toLocaleDateString(),
            duration: "1 hr",
            month: new Date(s.sessionDateTime).toLocaleString("default", {
              month: "long",
            }),
            year: new Date(s.sessionDateTime).getFullYear().toString(),
            isPaid: isPaid,
          };
        })
      );

      console.log("✅ Final session list with payment flags:", withPaymentStatus);
      setSessions(withPaymentStatus);
    } catch (err) {
      console.error("[Sessions] Error loading:", err);
      setSessions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tutorId) fetchSessions();
  }, [tutorId]);

  const handleDelete = (deletedId) => {
    setSessions((prev) => prev.filter((s) => s.booking_id !== deletedId));
    alert("✅ Session deleted successfully!");
  };

  if (loading) return <p>Loading sessions...</p>;

  return (
    <SessionList
      sessions={sessions}
      onDelete={handleDelete}
      onRefresh={fetchSessions}
    />
  );
}
