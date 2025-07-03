package com.wildteach.tutoringsystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.wildteach.tutoringsystem.entity.adminEntity;
import com.wildteach.tutoringsystem.repository.adminRepository;
import com.wildteach.tutoringsystem.service.adminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class adminController {

    @Autowired
    private adminService adminService;

    @Autowired
    private adminRepository adminRepository;

    @PostMapping("/addAdmin")
    public String addAdmin(@RequestBody adminEntity admin) {
        adminService.saveAdmin(admin);
        return "New admin is added";
    }

    @GetMapping("/getAllAdmins")
    public List<adminEntity> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/getAdmin/{id}")
    public ResponseEntity<adminEntity> getAdminById(@PathVariable Long id) {
        Optional<adminEntity> admin = adminRepository.findById(id);
        return admin.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/updateAdmin/{id}")
    public adminEntity updateAdmin(@PathVariable Long id, @RequestBody adminEntity adminDetails) {
        return adminService.updateAdmin(id, adminDetails);
    }

    @DeleteMapping("/deleteAdmin/{id}")
    public adminEntity deleteAdmin(@PathVariable Long id) {
        return adminService.deleteAdmin(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody adminEntity adminRequest) {
        adminEntity admin = adminService.login(adminRequest);

        if (admin != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("admin_id", admin.getAdmin_id());
            response.put("name", admin.getName());
            response.put("email", admin.getEmail());
            response.put("role", admin.getRole());
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
