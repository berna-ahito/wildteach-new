package com.wildteach.tutoringsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wildteach.tutoringsystem.entity.studentEntity;

@Repository
public interface studentRepository extends JpaRepository<studentEntity, Long> {
    studentEntity findByEmail(String email);

    long countByRole(studentEntity.Role role);

}
