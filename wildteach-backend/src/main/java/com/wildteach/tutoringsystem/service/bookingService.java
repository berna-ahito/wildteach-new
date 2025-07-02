package com.wildteach.tutoringsystem.service;

import java.util.List;

import com.wildteach.tutoringsystem.entity.bookingEntity;

public interface bookingService {

    bookingEntity saveBooking(bookingEntity booking);

    List<bookingEntity> getAllBookings();

    bookingEntity getBookingById(Long id);

    bookingEntity updateBooking(Long id, bookingEntity bookingDetails);

    boolean deleteBooking(Long id);

    long getActiveSessionsCount();

    List<bookingEntity> getBookingsByTutor(Long tutorId); // ✅ KEEP THIS

    List<bookingEntity> getBookingsByStudent(Long studentId); // ✅ ADD THIS
}
