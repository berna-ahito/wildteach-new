package com.wildteach.tutoringsystem.service;

import com.wildteach.tutoringsystem.entity.bookingEntity;

import java.util.List;

public interface bookingService {

    bookingEntity saveBooking(bookingEntity booking);

    List<bookingEntity> getAllBookings();

    bookingEntity getBookingById(Long id);

    bookingEntity updateBooking(Long id, bookingEntity bookingDetails);

    boolean deleteBooking(Long id);

    long getActiveSessionsCount();

    List<bookingEntity> getBookingsByTutor(Long tutorId);
}
