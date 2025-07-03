package com.wildteach.tutoringsystem.service;

import java.util.List;

import com.wildteach.tutoringsystem.entity.adminEntity;

public interface adminService {
    public adminEntity saveAdmin(adminEntity admin);    
    public List<adminEntity> getAllAdmins();
    public adminEntity getAdminById(Long id);
    public adminEntity updateAdmin(Long id, adminEntity adminDetails);
    public adminEntity deleteAdmin(Long id);
    public adminEntity login(adminEntity admin); 
    
}
