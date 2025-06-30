package com.wildteach.tutoringsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wildteach.tutoringsystem.dto.MessageDTO;
import com.wildteach.tutoringsystem.entity.Message;
import com.wildteach.tutoringsystem.service.MessageService;

@RestController
@CrossOrigin
public class MessageController {
      @Autowired
    private MessageService messageService;

    // WebSocket handler
    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public Message sendMessage(@Payload MessageDTO messageDTO) {
        return messageService.saveMessage(messageDTO.getSenderId(), messageDTO.getReceiverId(), messageDTO.getContent());
    }

    // REST API
    @GetMapping("/api/messages")
    public List<Message> getChatHistory(@RequestParam Long user1, @RequestParam Long user2) {
        return messageService.getChatHistory(user1, user2);
    }
}
