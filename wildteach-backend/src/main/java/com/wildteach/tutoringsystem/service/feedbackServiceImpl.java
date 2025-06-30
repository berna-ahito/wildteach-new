package com.wildteach.tutoringsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.feedbackEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.repository.feedbackRepository;
import com.wildteach.tutoringsystem.repository.tutorRepository;

@Service
public class feedbackServiceImpl implements feedbackService {

    @Autowired
    private feedbackRepository feedbackRepository;

    @Autowired
    private tutorRepository tutorRepository;

    @Override
    public feedbackEntity saveFeedback(feedbackEntity feedback) {
        if (feedback.getTutor() != null) {
            Optional<tutorEntity> tutorOptional = tutorRepository.findById(feedback.getTutor().getTutor_id());
            if (tutorOptional.isPresent()) {
                feedback.setTutor(tutorOptional.get());
                return feedbackRepository.save(feedback);
            } else {
                throw new IllegalArgumentException("Tutor with ID " + feedback.getTutor().getTutor_id() + " does not exist.");
            }
        } else {
            throw new IllegalArgumentException("Tutor must not be null.");
        }
    }

    @Override
    public List<feedbackEntity> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public feedbackEntity getFeedbackById(Long id) {
        return feedbackRepository.findById(id).orElse(null);
    }

    @Override
    public feedbackEntity updateFeedback(Long id, feedbackEntity feedbackDetails) {
        feedbackEntity feedback = feedbackRepository.findById(id).orElse(null);
        if (feedback != null) {
            feedback.setRating(feedbackDetails.getRating());
            feedback.setComment(feedbackDetails.getComment());
            return feedbackRepository.save(feedback);
        }
        return null;
    }

    @Override
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}
