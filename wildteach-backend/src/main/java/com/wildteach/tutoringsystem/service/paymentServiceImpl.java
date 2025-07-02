package com.wildteach.tutoringsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.bookingEntity;
import com.wildteach.tutoringsystem.entity.paymentEntity;
import com.wildteach.tutoringsystem.repository.bookingRepository;
import com.wildteach.tutoringsystem.repository.paymentRepository;

@Service
public class paymentServiceImpl implements paymentService {

    @Autowired
    private paymentRepository paymentRepository;

    @Autowired
    private bookingRepository bookingRepository;

    @Override
    public paymentEntity savePayment(paymentEntity payment) {
        if (payment.getBooking() != null) {
            Optional<bookingEntity> bookingOptional = bookingRepository.findById(payment.getBooking().getBookingId());

            if (bookingOptional.isPresent()) {
                List<paymentEntity> existingPayments = paymentRepository
                        .findAllByBooking_BookingId(payment.getBooking().getBookingId());

                if (!existingPayments.isEmpty()) {
                    // Update the first existing payment (or adjust logic as needed)
                    paymentEntity existing = existingPayments.get(0);
                    existing.setAmount(payment.getAmount());
                    existing.setStatus(payment.getStatus());
                    return paymentRepository.save(existing);
                }

                // No existing payment found, create a new one
                payment.setBooking(bookingOptional.get());
                return paymentRepository.save(payment);
            } else {
                throw new IllegalArgumentException(
                        "Booking with ID " + payment.getBooking().getBookingId() + " does not exist.");
            }
        } else {
            throw new IllegalArgumentException("Booking must not be null.");
        }
    }


    @Override
    public List<paymentEntity> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public paymentEntity getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    @Override
    public paymentEntity updatePayment(Long id, paymentEntity paymentDetails) {
        paymentEntity payment = paymentRepository.findById(id).orElse(null);
        if (payment != null) {
            payment.setAmount(paymentDetails.getAmount());
            payment.setStatus(paymentDetails.getStatus());
            return paymentRepository.save(payment);
        }
        return null;
    }

    @Override
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    @Override
    public double getTotalCompletedPaymentsByTutor(Long tutorId) {
        List<paymentEntity> payments = paymentRepository.findAll(); // or a custom query
        return payments.stream()
                .filter(p -> p.getStatus() == paymentEntity.payment_status.Completed)
                .filter(p -> p.getBooking().getTutor().getTutor_id().equals(tutorId))
                .mapToDouble(paymentEntity::getAmount)
                .sum();
    }

}
