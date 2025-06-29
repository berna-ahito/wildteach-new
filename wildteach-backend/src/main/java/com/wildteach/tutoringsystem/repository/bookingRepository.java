package com.wildteach.tutoringsystem.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wildteach.tutoringsystem.entity.bookingEntity;

@Repository
public interface bookingRepository extends JpaRepository<bookingEntity, Long> {
    public long countByStatus(String status);
}
