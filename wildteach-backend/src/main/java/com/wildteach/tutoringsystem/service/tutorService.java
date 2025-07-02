package com.wildteach.tutoringsystem.service;

import java.util.List;

import com.wildteach.tutoringsystem.entity.tutorEntity;

public interface tutorService {
    tutorEntity saveTutor(tutorEntity tutor);

    List<tutorEntity> getAllTutors();

    tutorEntity getTutorById(Long id);

    tutorEntity updateTutor(Long id, tutorEntity tutorDetails);

    void deleteTutor(Long id);

    boolean authenticateTutor(String email, String password);

    int countActiveTutors();

    boolean updateTutorPassword(Long tutor_id, String currentPassword, String newPassword);

    tutorEntity saveTutorWithStudentId(Long studentId, tutorEntity tutorData);

    tutorEntity findByStudent(Long studentId);
}
