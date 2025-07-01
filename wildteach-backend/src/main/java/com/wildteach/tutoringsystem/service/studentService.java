package com.wildteach.tutoringsystem.service;

import java.util.List;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;

public interface studentService {
	studentEntity saveStudent(studentEntity student);

	List<studentEntity> getAllStudents();

	public studentEntity getStudentById(Long id);

	public studentEntity updateStudent(Long id, studentEntity studentDetails);

	public boolean deleteStudent(Long id);

	public boolean authenticateStudent(String email, String password);

	long countActiveStudents();

	public boolean updateStudentPassword(Long student_id, String currentPassword, String newPassword);

	studentEntity findByEmail(String email);

	tutorEntity getTutorByStudentId(Long studentId);

	List<studentEntity> getAllTutors();
}
