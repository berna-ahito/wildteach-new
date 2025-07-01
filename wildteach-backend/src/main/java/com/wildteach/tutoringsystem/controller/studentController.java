package com.wildteach.tutoringsystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wildteach.tutoringsystem.dto.updatePasswordDTO;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.service.studentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class studentController {

    @Autowired
    private studentService studentService;

    @PostMapping("/add")
    public ResponseEntity<Long> addStudent(@RequestBody studentEntity student) {
        studentEntity saved = studentService.saveStudent(student);
        Long id = saved.getStudent_id();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(id);
    }

    @GetMapping("/all")
    public List<studentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/getById/{id}")
    public studentEntity getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("/activeStudentsCount")
    public long getActiveStudentsCount() {
        return studentService.countActiveStudents();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<studentEntity> updateStudent(@PathVariable Long id,
            @RequestBody studentEntity studentDetails) {
        studentEntity updatedStudent = studentService.updateStudent(id, studentDetails);
        if (updatedStudent != null) {
            return ResponseEntity.ok(updatedStudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        boolean deleted = studentService.deleteStudent(id);
        if (deleted) {
            return ResponseEntity.ok("Student deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Student not found");
        }
    }

    @GetMapping("/hasTutorProfile/{studentId}")
    public ResponseEntity<?> checkIfStudentIsTutor(@PathVariable Long studentId) {
        tutorEntity tutor = studentService.getTutorByStudentId(studentId);
        if (tutor != null) {
            return ResponseEntity.ok(Map.of(
                    "isTutor", true,
                    "tutor_id", tutor.getTutor_id()));
        }
        return ResponseEntity.ok(Map.of("isTutor", false));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginStudent(@RequestBody studentEntity student) {
        boolean isAuthenticated = studentService.authenticateStudent(student.getEmail(), student.getPassword());
        if (!isAuthenticated) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }

        studentEntity foundStudent = studentService.findByEmail(student.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("student_id", foundStudent.getStudent_id());
        response.put("role", foundStudent.getRole());
        response.put("name", foundStudent.getFirst_name() + " " + foundStudent.getLast_name());

        return ResponseEntity.ok(response);
    }

    @PutMapping("/updatePassword")
    public ResponseEntity<String> updateStudentPassword(
            @RequestBody updatePasswordDTO dto) {

        Long studentId = dto.getStudentId();

        if (studentId == null) {
            return ResponseEntity.status(400).body("Student ID is missing");
        }

        boolean success = studentService.updateStudentPassword(
                studentId,
                dto.getOldPassword(),
                dto.getNewPassword());

        if (success) {
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.status(400).body("Current password is incorrect");
        }
    }

    @GetMapping("/tutorAccounts")
    public List<studentEntity> getAllTutorAccounts() {
        return studentService.getAllTutors();
    }

}
