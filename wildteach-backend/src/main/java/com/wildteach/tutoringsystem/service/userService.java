package com.wildteach.tutoringsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wildteach.tutoringsystem.entity.studentEntity;
import com.wildteach.tutoringsystem.repository.adminRepository;
import com.wildteach.tutoringsystem.repository.studentRepository;

@Service
public class userService {

    @Autowired
    private studentRepository studentRepository;

    @Autowired
    private adminRepository adminRepository;

    public String getRoleByEmail(String email) {
        studentEntity student = studentRepository.findByEmail(email);
        if (student != null) {

            return student.getRole().name();
        }

        if (adminRepository.findByEmail(email) != null) {
            return "Admin";
        }

        return null;
    }
}
