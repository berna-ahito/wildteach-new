package com.wildteach.tutoringsystem.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class tutorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tutor_id;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private studentEntity student;

    private String subjects_offered;
    private BigDecimal rate_per_hour;

    // This should be a List<String> instead of a single string
    private String availability;

    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus;

    // Enum for approval status
    public enum ApprovalStatus {
        Pending, Approved, Rejected
    }

    public Long getTutor_id() {
        return tutor_id;
    }

    public void setTutor_id(Long tutor_id) {
        this.tutor_id = tutor_id;
    }

    public studentEntity getStudent() {
        return student;
    }

    public void setStudent(studentEntity student) {
        this.student = student;
    }

    public String getSubjects_offered() {
        return subjects_offered;
    }

    public void setSubjects_offered(String subjects_offered) {
        this.subjects_offered = subjects_offered;
    }

    public BigDecimal getRate_per_hour() {
        return rate_per_hour;
    }

    public void setRate_per_hour(BigDecimal rate_per_hour) {
        this.rate_per_hour = rate_per_hour;
    }

    // Directly accept List<String> for availability
    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getAvailability() {
        return availability;
    }

    public ApprovalStatus getApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(ApprovalStatus approvalStatus) {
        this.approvalStatus = approvalStatus;
    }
}
