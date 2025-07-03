package com.wildteach.tutoringsystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.nio.file.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    if (!foundStudent.getIs_active()) {
        return ResponseEntity.status(403).body(Map.of("message", "Account is deactivated."));
    }

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Login successful");
    response.put("student_id", foundStudent.getStudent_id());
    response.put("role", foundStudent.getRole());
    response.put("name", foundStudent.getFirst_name() + " " + foundStudent.getLast_name());
    response.put("email", foundStudent.getEmail());

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
    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<?> updateStudentStatus(@PathVariable Long id, @RequestParam boolean is_active) {
        studentEntity student = studentService.getStudentById(id);
        if (student == null) {
            return ResponseEntity.status(404).body("Student not found");
        }

        student.setIs_active(is_active);
        studentService.saveStudent(student); // Or updateStudent if you have validation
        return ResponseEntity.ok("Student status updated");
    }


    @PostMapping("/upload-profile/{id}")
    public ResponseEntity<?> uploadProfileImage(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) {
        try {
            if (file == null || file.isEmpty() || file.getOriginalFilename() == null) {
                return ResponseEntity.status(400).body("Invalid file");
            }

            String uploadDir = "../uploads/profile/";
            String fileName = "student_" + id + "_" +
                    file.getOriginalFilename().replaceAll("[^a-zA-Z0-9\\.\\-_]", "_");

            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            studentEntity student = studentService.getStudentById(id);
            student.setProfileImage(fileName);
            studentService.saveStudent(student);

            return ResponseEntity.ok("Profile image uploaded.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }
    @GetMapping("/existsByEmail")
    public ResponseEntity<Map<String, Boolean>> checkEmailExists(@RequestParam String email) {
        boolean exists = studentService.emailExists(email);
        return ResponseEntity.ok(Map.of("exists", exists));
    }


}
