package com.wildteach.tutoringsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.entity.paymentEntity;
import com.wildteach.tutoringsystem.repository.bookingRepository;
import com.wildteach.tutoringsystem.repository.paymentRepository;
import com.wildteach.tutoringsystem.service.paymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class paymentController {

    @Autowired
    private paymentService paymentService;

    @Autowired
    private paymentRepository paymentRepository;

    @Autowired
    private bookingRepository bookingRepository;

    // Endpoint to add a new payment
    @PostMapping("/addPayment")
    public ResponseEntity<?> addPayment(@RequestBody paymentEntity payment) {
        Long bookingId = payment.getBooking().getBookingId();

        bookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with ID " + bookingId));

        payment.setBooking(booking); // attach managed booking

        paymentEntity savedPayment = paymentRepository.save(payment);

        return ResponseEntity.ok(savedPayment);
    }

    // Endpoint to get all payments
    @GetMapping("/getAllPayments")
    public ResponseEntity<List<paymentEntity>> getAllPayments() {
        return ResponseEntity.ok(paymentService.getAllPayments());
    }

    // Endpoint to get a payment by ID
    @GetMapping("/getPaymentById/{id}")
    public ResponseEntity<paymentEntity> getPaymentById(@PathVariable Long id) {
        paymentEntity payment = paymentService.getPaymentById(id);
        if (payment != null) {
            return ResponseEntity.ok(payment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to update a payment by ID
    @PutMapping("/updatePayment/{id}")
    public ResponseEntity<paymentEntity> updatePayment(@PathVariable Long id,
            @RequestBody paymentEntity paymentDetails) {
        paymentEntity updatedPayment = paymentService.updatePayment(id, paymentDetails);
        if (updatedPayment != null) {
            return ResponseEntity.ok(updatedPayment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to delete a payment by ID
    @DeleteMapping("/deletePayment/{id}")
    public ResponseEntity<String> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return ResponseEntity.ok("Payment with ID " + id + " has been deleted.");
    }

    @GetMapping("/totalCompletedPayments/{tutorId}")
    public ResponseEntity<Double> getTotalCompletedPaymentsByTutor(@PathVariable Long tutorId) {
        double total = paymentService.getTotalCompletedPaymentsByTutor(tutorId);
        return ResponseEntity.ok(total);
    }

}