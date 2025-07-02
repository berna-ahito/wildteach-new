package com.wildteach.tutoringsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody ContactMessage message) {
        System.out.println("📨 Contact message received:");
        System.out.println("From: " + message.getName() + " <" + message.getEmail() + ">");
        System.out.println("Subject: " + message.getSubject());
        System.out.println("Message: " + message.getMessage());

        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo("max21426sepulveda@gmail.com"); // Your inbox
            email.setSubject("WildTeach Contact: " + message.getSubject());
            email.setText(
                "Name: " + message.getName() + "\n" +
                "Email: " + message.getEmail() + "\n\n" +
                message.getMessage()
            );

            mailSender.send(email);
            return ResponseEntity.ok("✅ Message sent successfully!");
        } catch (Exception e) {
            System.err.println("❌ Failed to send email: " + e.getMessage());
            return ResponseEntity.status(500).body("❌ Failed to send message.");
        }
    }

    // DTO
    public static class ContactMessage {
        private String name;
        private String email;
        private String subject;
        private String message;

        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
