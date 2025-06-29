package com.wildteach.tutoringsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wildteach.tutoringsystem.entity.adminEntity;

@Repository
public interface adminRepository extends JpaRepository<adminEntity, Long> {
    adminEntity findByEmail(String email);

    
} 
