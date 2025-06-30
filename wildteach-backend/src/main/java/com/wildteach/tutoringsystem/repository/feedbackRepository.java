package com.wildteach.tutoringsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wildteach.tutoringsystem.entity.feedbackEntity;

public interface feedbackRepository extends JpaRepository<feedbackEntity, Long> {
}
