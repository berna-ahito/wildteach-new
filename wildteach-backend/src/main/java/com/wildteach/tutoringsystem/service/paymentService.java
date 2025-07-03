package com.wildteach.tutoringsystem.service;

import java.util.List;

import com.wildteach.tutoringsystem.entity.paymentEntity;

public interface paymentService {
    paymentEntity savePayment(paymentEntity paymentEntity);

    List<paymentEntity> getAllPayments();

    paymentEntity getPaymentById(Long id);

    paymentEntity updatePayment(Long id, paymentEntity paymentDetails);

    void deletePayment(Long id);

    double getTotalCompletedPaymentsByTutor(Long tutorId);

}
