package com.wildteach.tutoringsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wildteach.tutoringsystem.entity.adminEntity;
import com.wildteach.tutoringsystem.repository.adminRepository;


@Service
public class adminServiceImpl implements adminService{
    @Autowired
    private adminRepository adminRepository;
    @Override
    public adminEntity saveAdmin(adminEntity admin) {
        return adminRepository.save(admin);
    }
    @Override
    public List<adminEntity> getAllAdmins() {
        return adminRepository.findAll();
    }
    @Override
    public adminEntity getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }
    @Override
    public adminEntity updateAdmin(Long id, adminEntity adminDetails) {
        adminEntity admin = adminRepository.findById(id).orElse(null);
        if (admin != null) {
            admin.setName(adminDetails.getName());
            admin.setEmail(adminDetails.getEmail());
            admin.setPassword(adminDetails.getPassword());
            return adminRepository.save(admin);
        }
        return null;
    }
    
    @Override
    public adminEntity deleteAdmin(Long id) {
        adminEntity admin = adminRepository.findById(id).orElse(null);
        if (admin != null) {
            adminRepository.deleteById(id);
        }
        return admin;
    }
    @Override
    public adminEntity login(adminEntity admin) {
        adminEntity foundAdmin = adminRepository.findByEmail(admin.getEmail());
    
        if (foundAdmin != null && foundAdmin.getPassword().equals(admin.getPassword())) {
            return foundAdmin;
        }
    
        return null; 
    }
}
