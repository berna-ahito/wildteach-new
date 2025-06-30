package com.wildteach.tutoringsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.service.bookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private bookingService bookingService;

    @PostMapping("/add")
    public String addBooking(@RequestBody bookingEntity booking) {
        bookingService.saveBooking(booking);
        return "New booking is added";
    }

    @GetMapping("/all")
    public List<bookingEntity> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/getById/{id}")
    public bookingEntity getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<bookingEntity> updateBooking(@PathVariable Long id,
            @RequestBody bookingEntity bookingDetails) {
        bookingEntity updatedBooking = bookingService.updateBooking(id, bookingDetails);
        if (updatedBooking != null) {
            return ResponseEntity.ok(updatedBooking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        boolean deleted = bookingService.deleteBooking(id);
        if (deleted) {
            return ResponseEntity.ok("Booking deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Booking not found");
        }
    }

    @GetMapping("/activeSessionsCount")
    public long getActiveSessionsCount() {
        return bookingService.getActiveSessionsCount();
    }

}
