package com.wildteach.tutoringsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.repository.bookingRepository;
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

            // // Fetch student and tutor from DB by ID
            // studentEntity student = studentRepository.findById(
            // bookingDetails.getStudent().getStudent_id()).orElse(null);
            //
            // tutorEntity tutor = tutorRepository.findById(
            // bookingDetails.getTutor().getTutor_id()).orElse(null);

            booking.setStudent(bookingDetails.getStudent());
            booking.setTutor(bookingDetails.getTutor());
            booking.setSubject(bookingDetails.getSubject());
            booking.setSessionDateTime(bookingDetails.getSessionDateTime());
            booking.setStatus(bookingDetails.getStatus());
            return bookingRepository.save(booking);
        }
        return null;
    }

    @Override
    public boolean deleteBooking(Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public long getActiveSessionsCount() {
        return bookingRepository.countByStatus("Scheduled");
    }

    
    

}
