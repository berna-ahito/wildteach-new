package com.wildteach.tutoringsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.repository.bookingRepository;
import com.wildteach.tutoringsystem.repository.paymentRepository;
import com.wildteach.tutoringsystem.repository.studentRepository;
import com.wildteach.tutoringsystem.repository.tutorRepository;

@Service
public class bookingServiceImpl implements bookingService {

    @Autowired
    private bookingRepository bookingRepository;

    @Autowired
    private studentRepository studentRepository;

    @Autowired
    private tutorRepository tutorRepository;

    @Autowired
    private paymentRepository paymentRepository;

    @Override
    public boolean deleteBooking(Long bookingId) {
        if (!bookingRepository.existsById(bookingId)) {
            return false;
        }

        // Delete all payments linked to this booking
        paymentRepository.deleteAll(paymentRepository.findAllByBooking_BookingId(bookingId));

        // Now delete the booking
        bookingRepository.deleteById(bookingId);
        return true;
    }

    @Override
    public bookingEntity saveBooking(bookingEntity booking) {
        // Attach student if present
        if (booking.getStudent() != null && booking.getStudent().getStudent_id() != null) {
            studentEntity student = studentRepository.findById(booking.getStudent().getStudent_id())
                    .orElseThrow(() -> new RuntimeException("Student not found"));
            booking.setStudent(student);
        } else {
            throw new RuntimeException("Student ID is required");
        }

        // Attach tutor if present
        if (booking.getTutor() != null && booking.getTutor().getTutor_id() != null) {
            tutorEntity tutor = tutorRepository.findById(booking.getTutor().getTutor_id())
                    .orElseThrow(() -> new RuntimeException("Tutor not found"));
            booking.setTutor(tutor);
        } else {
            throw new RuntimeException("Tutor ID is required");
        }

        if (booking.getDuration() == null) {
            booking.setDuration(60);
        }

        return bookingRepository.save(booking);
    }

    @Override
    public List<bookingEntity> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public bookingEntity getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    @Override
    public bookingEntity updateBooking(Long id, bookingEntity bookingDetails) {
        bookingEntity booking = bookingRepository.findById(id).orElse(null);
        if (booking != null) {
            booking.setStudent(bookingDetails.getStudent());
            booking.setTutor(bookingDetails.getTutor());
            booking.setSubject(bookingDetails.getSubject());
            booking.setSessionDateTime(bookingDetails.getSessionDateTime());
            booking.setStatus(bookingDetails.getStatus());
            booking.setDuration(bookingDetails.getDuration());
            return bookingRepository.save(booking);
        }
        return null;
    }

    @Override
    public long getActiveSessionsCount() {
        return bookingRepository.countByStatus("Scheduled");
    }

    @Override
    public List<bookingEntity> getBookingsByTutor(Long tutorId) {
        return bookingRepository.findByTutorId(tutorId);
    }

    @Override
    public List<bookingEntity> getBookingsByStudent(Long studentId) {
        return bookingRepository.findByStudentId(studentId);
    }
}
