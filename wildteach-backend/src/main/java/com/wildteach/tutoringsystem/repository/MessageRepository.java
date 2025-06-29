package com.wildteach.tutoringsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wildteach.tutoringsystem.entity.Message;
import com.wildteach.tutoringsystem.entity.studentEntity;

public interface MessageRepository extends JpaRepository<Message, Long>{
    List<Message>findBySenderAndReceiverOrReceiverAndSender(
        studentEntity sender1, studentEntity receiver1, studentEntity receiver2, studentEntity sender2); 
}