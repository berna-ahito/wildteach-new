package com.wildteach.tutoringsystem.service;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import java.util.List;

public interface bookingService {

    // Save a new booking
    bookingEntity saveBooking(bookingEntity booking);

    // Get all bookings
    List<bookingEntity> getAllBookings();

    // Get a booking by its ID
    bookingEntity getBookingById(Long id);

    // Update an existing booking
    bookingEntity updateBooking(Long id, bookingEntity bookingDetails);

    // Delete a booking by its ID
    boolean deleteBooking(Long id);

    public long getActiveSessionsCount();


}
