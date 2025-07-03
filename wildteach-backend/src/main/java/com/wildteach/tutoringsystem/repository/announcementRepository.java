package com.wildteach.tutoringsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wildteach.tutoringsystem.entity.announcementEntity;

@Repository
public interface announcementRepository extends JpaRepository<announcementEntity, Long> {   
} 