package com.wildteach.tutoringsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.wildteach.tutoringsystem.entity.studentEntity;

@Repository
public interface studentRepository extends JpaRepository<studentEntity, Long> {
    studentEntity findByEmail(String email);
    boolean existsByEmail(String email);


    long countByRole(studentEntity.Role role);

    @Query("SELECT s FROM studentEntity s WHERE s.role = com.wildteach.tutoringsystem.entity.studentEntity.Role.Tutor")
    List<studentEntity> findAllTutors();

}
