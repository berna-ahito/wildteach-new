package com.wildteach.tutoringsystem.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.entity.tutorEntity;
import com.wildteach.tutoringsystem.service.tutorService;
import com.wildteach.tutoringsystem.service.studentService;

@RestController
@RequestMapping("/tutor")
@CrossOrigin(origins = "*")
public class tutorController {

    @Autowired
    private tutorService tutorService;
    @Autowired
    private studentService studentService;

    @PostMapping("/add")
    public ResponseEntity<?> addTutor(@RequestBody Map<String, Object> payload) {
        Long studentId = Long.valueOf(payload.get("student_id").toString());

        tutorEntity tutor = new tutorEntity();

        // Handle approval status safely with a try-catch
        String statusStr = (String) payload.get("approval_status");
        try {
            tutor.setApprovalStatus(tutorEntity.ApprovalStatus.valueOf(statusStr));
        } catch (IllegalArgumentException | NullPointerException e) {
            return ResponseEntity.badRequest().body("Invalid approval_status: " + statusStr);
        }

        tutor.setAvailability((String) payload.get("availability"));
        tutor.setSubjects_offered((String) payload.get("subjects_offered"));

        // Parse rate_per_hour safely
        if (payload.get("rate_per_hour") != null) {
            try {
                tutor.setRate_per_hour(new BigDecimal(payload.get("rate_per_hour").toString()));
            } catch (NumberFormatException e) {
                return ResponseEntity.badRequest().body("Invalid rate_per_hour format");
            }
        }

        tutorEntity savedTutor = tutorService.saveTutorWithStudentId(studentId, tutor);
        return ResponseEntity.ok(savedTutor);
    }

    // Endpoint to get all tutors
    @GetMapping("/all")
    public List<tutorEntity> getAllTutors() {
        return tutorService.getAllTutors();
    }

    // Endpoint to get a tutor by ID
    @GetMapping("/getById/{id}")
    public tutorEntity getTutorById(@PathVariable Long id) {
        return tutorService.getTutorById(id);
    }

    // Endpoint to update a tutor by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<tutorEntity> updateTutor(@PathVariable Long id, @RequestBody tutorEntity tutorDetails) {
        tutorEntity updatedTutor = tutorService.updateTutor(id, tutorDetails);
        if (updatedTutor != null) {
            return ResponseEntity.ok(updatedTutor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to delete a tutor by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTutor(@PathVariable Long id) {
        tutorService.deleteTutor(id);
        return ResponseEntity.status(HttpStatus.OK).body("Tutor profile deleted");
    }

    @GetMapping("/activeCount")
    public ResponseEntity<Integer> getActiveTutorsCount() {
        int activeTutorsCount = tutorService.countActiveTutors();
        return ResponseEntity.ok(activeTutorsCount);
    }
    // Endpoint to login a tutor

    @PostMapping("/login")
    public ResponseEntity<?> loginTutor(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        boolean isAuthenticated = tutorService.authenticateTutor(email, password);
        if (!isAuthenticated) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        studentEntity foundStudent = studentService.findByEmail(email);
        if (foundStudent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found for the given email");
        }

        tutorEntity foundTutor = tutorService.findByStudent(foundStudent.getStudent_id());
        if (foundTutor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tutor profile not found for this student");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("tutor_id", foundTutor.getTutor_id());
        response.put("student_id", foundStudent.getStudent_id());
        response.put("name", foundStudent.getFirst_name() + " " + foundStudent.getLast_name());

        return ResponseEntity.ok(response);
    }

}
