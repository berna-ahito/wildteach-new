package com.wildteach.tutoringsystem.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.Message;
import com.wildteach.tutoringsystem.repository.MessageRepository;
import com.wildteach.tutoringsystem.repository.studentRepository;
import com.wildteach.tutoringsystem.entity.studentEntity;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private studentRepository studentRepository;

    public Message saveMessage(Long senderId, Long receiverId, String content) {
        studentEntity sender = studentRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Sender not found"));

        studentEntity receiver = studentRepository.findById(receiverId)
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        Message message = new Message(sender, receiver, content, LocalDateTime.now());
        return messageRepository.save(message);
    }

    public List<Message> getChatHistory(Long user1Id, Long user2Id) {
        studentEntity user1 = studentRepository.findById(user1Id)
                .orElseThrow(() -> new RuntimeException("User 1 not found"));

        studentEntity user2 = studentRepository.findById(user2Id)
                .orElseThrow(() -> new RuntimeException("User 2 not found"));

        return messageRepository.findBySenderAndReceiverOrReceiverAndSender(user1, user2, user1, user2);
    }
}
