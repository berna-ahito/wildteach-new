package com.wildteach.tutoringsystem.repository;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface bookingRepository extends JpaRepository<bookingEntity, Long> {

    long countByStatus(String status);

    @Query("SELECT b FROM bookingEntity b WHERE b.tutor.tutor_id = :tutorId")
    List<bookingEntity> findByTutorId(@Param("tutorId") Long tutorId);
}
