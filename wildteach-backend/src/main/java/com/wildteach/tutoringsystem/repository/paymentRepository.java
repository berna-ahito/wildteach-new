package com.wildteach.tutoringsystem.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wildteach.tutoringsystem.entity.paymentEntity;

public interface paymentRepository extends JpaRepository<paymentEntity, Long> {
    boolean existsByBooking_BookingId(Long bookingId);
    
    List<paymentEntity> findAllByBooking_BookingId(Long bookingId);
} 
