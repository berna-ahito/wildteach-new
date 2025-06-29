package com.wildteach.tutoringsystem.service;

import java.util.List;
import com.wildteach.tutoringsystem.entity.announcementEntity;

public interface announcementService {
    public announcementEntity saveAnnouncement(announcementEntity announcement);

    public List<announcementEntity> getAllAnnouncements();

    public announcementEntity getAnnouncementById(Long id);

    public announcementEntity updateAnnouncement(Long id, announcementEntity announcementDetails);

    public announcementEntity deleteAnnouncement(Long id);

    List<announcementEntity> getActiveAnnouncements();
}
