package com.wildteach.tutoringsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wildteach.tutoringsystem.entity.bookingEntity;

@Repository
public interface bookingRepository extends JpaRepository<bookingEntity, Long> {

    long countByStatus(String status);

    @Query("SELECT b FROM bookingEntity b WHERE b.tutor.tutor_id = :tutorId")
    List<bookingEntity> findByTutorId(@Param("tutorId") Long tutorId);

    //ADDED CODE | 07-01-25
    @Query("SELECT b FROM bookingEntity b WHERE b.student.student_id = :studentId")
    List<bookingEntity> findByStudentId(@Param("studentId") Long studentId);

}
