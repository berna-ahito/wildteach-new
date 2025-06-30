package com.wildteach.tutoringsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wildteach.tutoringsystem.entity.feedbackEntity;
import com.wildteach.tutoringsystem.service.feedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class feedbackController {

    @Autowired
    private feedbackService feedbackService;

    @PostMapping("/add")
    public ResponseEntity<feedbackEntity> addFeedback(@RequestBody feedbackEntity feedback) {
        return ResponseEntity.ok(feedbackService.saveFeedback(feedback));
    }

    @GetMapping("/all")
    public List<feedbackEntity> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<feedbackEntity> getFeedbackById(@PathVariable Long id) {
        feedbackEntity feedback = feedbackService.getFeedbackById(id);
        return feedback != null ? ResponseEntity.ok(feedback) : ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<feedbackEntity> updateFeedback(@PathVariable Long id, @RequestBody feedbackEntity feedbackDetails) {
        feedbackEntity updated = feedbackService.updateFeedback(id, feedbackDetails);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.ok("Feedback deleted");
    }
}
