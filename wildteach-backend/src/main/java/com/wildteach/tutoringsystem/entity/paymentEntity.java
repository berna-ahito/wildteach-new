package com.wildteach.tutoringsystem.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment")
public class paymentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payment_id;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false, unique = true)
    private bookingEntity booking;
    private double amount;
    @Enumerated(EnumType.STRING)
    private payment_status status;

    public enum payment_status {
        Pending,
        Completed,
        Failed
    };

    public long payment_id() {
        return payment_id;
    }

    public void setPayment_id(long payment_id) {
        this.payment_id = payment_id;
    }

    public bookingEntity getBooking() {
        return booking;
    }

    public void setBooking(bookingEntity booking) {
        this.booking = booking;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public payment_status getStatus() {
        return status;
    }

    public void setStatus(payment_status status) {
        this.status = status;
    }
}
