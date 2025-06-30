package com.wildteach.tutoringsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class feedbackEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedback_id;

    @ManyToOne
    @JoinColumn(name = "tutor_id", nullable = false)
    private tutorEntity tutor;

    private int rating;
    private String comment;

    public Long getFeedback_id() {
        return feedback_id;
    }

    public void setFeedback_id(Long feedback_id) {
        this.feedback_id = feedback_id;
    }

    public tutorEntity getTutor() {
        return tutor;
    }

    public void setTutor(tutorEntity tutor) {
        this.tutor = tutor;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
