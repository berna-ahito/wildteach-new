package com.wildteach.tutoringsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wildteach.tutoringsystem.entity.announcementEntity;
import com.wildteach.tutoringsystem.service.announcementService;

@RestController
@RequestMapping("/announcement")
@CrossOrigin
public class announcementController {
    @Autowired
    private announcementService announcementService;

    // Endpoint to add a new announcement
    @PostMapping("/addAnnounce")
    public String addAnnounce(@RequestBody announcementEntity announce) {
        announcementService.saveAnnouncement(announce);
        return "New announcement is added";
    }

    // Endpoint to get all announcements
    @GetMapping("/getAllAnnounce")
    public List<announcementEntity> getAllAnnouncements() {
        return announcementService.getAllAnnouncements();
    }

    // Endpoint to get an announcement by ID
    @GetMapping("/getAnnounceById/{id}")
    public announcementEntity getAnnouncementById(@PathVariable Long id) {
        return announcementService.getAnnouncementById(id);
    }

    // Endpoint to update an announcement by ID
    @PutMapping("/updateAnnouncement/{id}")
    public announcementEntity updateAnnouncement(@PathVariable Long id,
            @RequestBody announcementEntity announcementDetails) {
        announcementEntity updatedAnnounce = announcementService.updateAnnouncement(id, announcementDetails);
        if (updatedAnnounce != null) {
            return updatedAnnounce;
        } else {
            return null;
        }
    }

    // Endpoint to delete an announcement by ID
    @DeleteMapping("/delete/{id}")
    public announcementEntity deleteAnnouncement(@PathVariable Long id) {
        return announcementService.deleteAnnouncement(id);
    }

    @GetMapping("/activeAnnounce")
    public List<announcementEntity> getActiveAnnouncements() {
        return announcementService.getActiveAnnouncements();
    }

}
