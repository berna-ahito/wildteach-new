package com.wildteach.tutoringsystem.controller;

import java.util.List;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        System.out.println("Deleting booking ID: " + id); // optional debug log

        boolean success = bookingService.deleteBooking(id);
        if (success) {
            return ResponseEntity.ok("Booking deleted");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found");
        }
    }

    @GetMapping("/activeSessionsCount")
    public long getActiveSessionsCount() {
        return bookingService.getActiveSessionsCount();
    }

    @GetMapping("/tutor/{tutorId}")
    public List<bookingEntity> getBookingsByTutor(@PathVariable Long tutorId) {
        return bookingService.getBookingsByTutor(tutorId);
    }

    // ADDED - to get bookings by student
    @GetMapping("/student/{studentId}")
    public List<bookingEntity> getBookingsByStudent(@PathVariable Long studentId) {
        return bookingService.getBookingsByStudent(studentId);
    }

    @GetMapping("/sessions/tutor/today/{tutorId}")
    public List<Map<String, Object>> getTodaySessions(@PathVariable Long tutorId) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startOfDay = now.toLocalDate().atStartOfDay();
        LocalDateTime endOfDay = now.toLocalDate().atTime(23, 59, 59);

        List<bookingEntity> all = bookingService.getBookingsByTutor(tutorId);

        return all.stream()
                .filter(b -> b.getSessionDateTime() != null &&
                        !b.getSessionDateTime().isBefore(startOfDay) &&
                        !b.getSessionDateTime().isAfter(endOfDay))
                .map(b -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("session_time", b.getSessionDateTime());
                    map.put("student_name", b.getStudent().getFirst_name() + " " + b.getStudent().getLast_name());
                    map.put("subject", b.getSubject());
                    map.put("status", b.getStatus());
                    return map;
                })
                .toList();
    }

}
