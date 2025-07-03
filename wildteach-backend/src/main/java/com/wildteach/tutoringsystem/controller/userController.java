package com.wildteach.tutoringsystem.controller;

import com.wildteach.tutoringsystem.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class userController {

    @Autowired
    private userService userService;

    // Endpoint to get the role by email
    @GetMapping("/role")
    public String getRoleByEmail(@RequestParam String email) {
        String role = userService.getRoleByEmail(email);
        if (role != null) {
            return role;
        }
        return "User not found!";
    }
}
