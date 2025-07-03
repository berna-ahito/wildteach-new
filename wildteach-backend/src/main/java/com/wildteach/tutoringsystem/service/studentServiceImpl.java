package com.wildteach.tutoringsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.repository.studentRepository;

@Service
public class studentServiceImpl implements studentService {

    @Autowired
    private studentRepository studentRepository;
    @Autowired
    private tutorService tutorService;

    @Override
    public tutorEntity getTutorByStudentId(Long studentId) {
        return tutorService.findByStudent(studentId);
    }

    @Override
    public studentEntity saveStudent(studentEntity student) {
        return studentRepository.save(student);
    }

    @Override
    public List<studentEntity> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public studentEntity getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    @Override
    public studentEntity updateStudent(Long id, studentEntity updatedDetails) {
        studentEntity existingStudent = getStudentById(id);
        if (existingStudent == null) {
            return null;
        }

        if (updatedDetails.getFirst_name() != null)
            existingStudent.setFirst_name(updatedDetails.getFirst_name());

        if (updatedDetails.getLast_name() != null)
            existingStudent.setLast_name(updatedDetails.getLast_name());

        if (updatedDetails.getMiddle_name() != null)
            existingStudent.setMiddle_name(updatedDetails.getMiddle_name());

        if (updatedDetails.getBirth_date() != null)
            existingStudent.setBirth_date(updatedDetails.getBirth_date());

        if (updatedDetails.getGender() != null)
            existingStudent.setGender(updatedDetails.getGender());

        if (updatedDetails.getEmail() != null)
            existingStudent.setEmail(updatedDetails.getEmail());

        if (updatedDetails.getContact_number() != null)
            existingStudent.setContact_number(updatedDetails.getContact_number());

        if (updatedDetails.getAddress() != null)
            existingStudent.setAddress(updatedDetails.getAddress());

        if (updatedDetails.getUsername() != null)
            existingStudent.setUsername(updatedDetails.getUsername());

        if (updatedDetails.getCourse() != null)
            existingStudent.setCourse(updatedDetails.getCourse());

        if (updatedDetails.getYear_level() != null)
            existingStudent.setYear_level(updatedDetails.getYear_level());

        if (updatedDetails.getProfileImage() != null)
            existingStudent.setProfileImage(updatedDetails.getProfileImage());

        if (updatedDetails.getRole() != null)
            existingStudent.setRole(updatedDetails.getRole());

        if (updatedDetails.getPassword() != null)
            existingStudent.setPassword(updatedDetails.getPassword());

        return studentRepository.save(existingStudent);
    }

    @Override
    public boolean deleteStudent(Long id) {
        if (studentRepository.existsById(id)) {
            studentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean authenticateStudent(String email, String password) {
        studentEntity student = studentRepository.findByEmail(email);
        return student != null && student.getPassword().equals(password); // Remove role check
    }

    @Override
    public long countActiveStudents() {
        return studentRepository.countByRole(studentEntity.Role.Tutee);
    }

    @Override
    public boolean updateStudentPassword(Long studentId, String oldPassword, String newPassword) {
        studentEntity student = studentRepository.findById(studentId).orElse(null);
        if (student == null || !student.getPassword().equals(oldPassword)) {
            return false;
        }
        student.setPassword(newPassword);
        studentRepository.save(student);
        return true;
    }

    @Override
    public studentEntity findByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

    @Override
    public List<studentEntity> getAllTutors() {
        return studentRepository.findAllTutors();
    }
    @Override   
    public boolean emailExists(String email) {
        return studentRepository.findByEmail(email) != null;
    }



}
