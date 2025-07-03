package com.wildteach.tutoringsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.repository.studentRepository;
import com.wildteach.tutoringsystem.repository.tutorRepository;

@Service
public class tutorServiceImpl implements tutorService {

    @Autowired
    private tutorRepository tutorRepository;
    @Autowired
    private studentRepository studentRepository;

    @Override
    public tutorEntity saveTutor(tutorEntity tutor) {
        return tutorRepository.save(tutor);
    }

    @Override
    public List<tutorEntity> getAllTutors() {
        return tutorRepository.findAll();
    }

    @Override
    public tutorEntity getTutorById(Long id) {
        return tutorRepository.findById(id).orElse(null);
    }

    @Override
    public tutorEntity updateTutor(Long id, tutorEntity tutorDetails) {
        tutorEntity tutor = tutorRepository.findById(id).orElse(null);
        if (tutor != null) {
            if (tutorDetails.getSubjects_offered() != null) {
                tutor.setSubjects_offered(tutorDetails.getSubjects_offered());
            }
            if (tutorDetails.getRate_per_hour() != null) {
                tutor.setRate_per_hour(tutorDetails.getRate_per_hour());
            }
            if (tutorDetails.getAvailability() != null) {
                tutor.setAvailability(tutorDetails.getAvailability());
            }
            if (tutorDetails.getApprovalStatus() != null) {
                tutor.setApprovalStatus(tutorDetails.getApprovalStatus());
            }
            return tutorRepository.save(tutor);
        }
        return null;
    }

    @Override
    public void deleteTutor(Long id) {
        tutorRepository.deleteById(id);
    }

    @Override
    public boolean authenticateTutor(String email, String password) {
        studentEntity student = studentRepository.findByEmail(email);
        return student != null && student.getPassword().equals(password)
                && student.getRole() == studentEntity.Role.Tutor;
    }

    @Override
    public int countActiveTutors() {
        // Count tutors who are 'Approved'
        return (int) tutorRepository.countByApprovalStatus(tutorEntity.ApprovalStatus.Approved);
    }

    @Override
    public boolean updateTutorPassword(Long tutor_id, String currentPassword, String newPassword) {
        tutorEntity tutor = tutorRepository.findById(tutor_id).orElse(null);

        if (tutor != null) {
            studentEntity student = tutor.getStudent();
            if (student != null && student.getPassword().equals(currentPassword)) {
                student.setPassword(newPassword);
                // Save through student repository if needed, or cascade from tutor
                tutorRepository.save(tutor); // Assumes cascade is set up
                return true;
            }
        }

        return false;
    }

    @Override
    public tutorEntity saveTutorWithStudentId(Long studentId, tutorEntity tutorData) {
        studentEntity student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));

        tutorData.setStudent(student);
        return tutorRepository.save(tutorData);
    }

    @Override
    public tutorEntity findByStudent(Long studentId) {
        return tutorRepository.findByStudentId(studentId);
    }
}
