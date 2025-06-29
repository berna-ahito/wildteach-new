package com.wildteach.tutoringsystem.service;

import java.util.List;

import com.wildteach.tutoringsystem.entity.feedbackEntity;

public interface feedbackService {
    feedbackEntity saveFeedback(feedbackEntity feedback);
    List<feedbackEntity> getAllFeedback();
    feedbackEntity getFeedbackById(Long id);
    feedbackEntity updateFeedback(Long id, feedbackEntity feedbackDetails);
    void deleteFeedback(Long id);
}
