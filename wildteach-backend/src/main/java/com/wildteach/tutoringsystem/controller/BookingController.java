package com.wildteach.tutoringsystem.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wildteach.tutoringsystem.dto.BookingDTO;
import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.service.bookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    private static final ZoneId MANILA = ZoneId.of("Asia/Manila");

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
    public ResponseEntity<bookingEntity> updateBooking(
            @PathVariable Long id,
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
    public List<BookingDTO> getBookingsByTutor(@PathVariable Long tutorId) {
        return bookingService.getBookingsByTutor(tutorId).stream()
                .map(b -> {
                    BookingDTO dto = new BookingDTO();
                    dto.setSessionTime(b.getSessionDateTime());
                    dto.setStudentName(b.getStudent().getFirst_name() + " " + b.getStudent().getLast_name());
                    dto.setProfileImage(b.getStudent().getProfileImage());
                    dto.setSubject(b.getSubject());
                    dto.setStatus(b.getStatus());
                    return dto;
                })
                .toList();
    }

    @GetMapping("/student/{studentId}")
    public List<bookingEntity> getBookingsByStudent(@PathVariable Long studentId) {
        return bookingService.getBookingsByStudent(studentId);
    }

    @GetMapping("/sessions/tutor/today/{tutorId}")
    public List<BookingDTO> getTodaySessions(@PathVariable Long tutorId) {
        LocalDate today = LocalDate.now(ZoneId.of("Asia/Manila"));
        LocalDateTime start = today.atStartOfDay();
        LocalDateTime end = today.atTime(23, 59, 59);

        return bookingService.getBookingsByTutor(tutorId).stream()
                .filter(b -> {
                    LocalDateTime dt = b.getSessionDateTime();
                    return dt != null && !dt.isBefore(start) && !dt.isAfter(end);
                })
                .map(b -> {
                    BookingDTO dto = new BookingDTO();
                    dto.setSessionTime(b.getSessionDateTime());
                    dto.setStudentName(b.getStudent().getFirst_name() + " " + b.getStudent().getLast_name());
                    dto.setProfileImage(b.getStudent().getProfileImage());
                    dto.setSubject(b.getSubject());
                    dto.setStatus(b.getStatus());
                    return dto;
                })
                .toList();
    }
}
