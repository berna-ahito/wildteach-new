import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function TutorPayment({ open, onClose, bookingId, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("⚠️ Please enter a valid payment amount.");
      return;
    }

    setLoading(true);
    try {
      console.log("📤 Sending payment for booking:", bookingId);
      await axios.post("http://localhost:8080/payment/addPayment", {
        amount: parseFloat(amount),
        status: "Completed",
        booking: { bookingId },
      });

      console.log("✅ Payment successfully posted. Refreshing session...");
      onSuccess?.();
      onClose();
      setAmount("");
    } catch (error) {
      console.error("[TutorPayment] ❌ Failed to record payment:", error);
      alert("❌ Failed to record payment.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setAmount("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Mark Session as Paid</DialogTitle>
      <DialogContent>
        <TextField
          label="Amount Paid"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" disabled={loading}>
          {loading ? "Processing..." : "Confirm Payment"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
