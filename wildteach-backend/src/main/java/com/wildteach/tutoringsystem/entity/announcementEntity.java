package com.wildteach.tutoringsystem.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "announcement")
public class announcementEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long announcement_id;

    @ManyToOne
    @JoinColumn(name = "admin_id", referencedColumnName = "admin_id", nullable = false)
    private adminEntity admin;

    private String title; // ✅ NEW FIELD
    private String message;
    private LocalDateTime created_at;

    public announcementEntity() {}

    public long getAnnouncement_id() {
        return announcement_id;
    }

    public void setAnnouncement_id(long announcement_id) {
        this.announcement_id = announcement_id;
    }

    public adminEntity getAdmin() {
        return admin;
    }

    public void setAdmin(adminEntity admin) {
        this.admin = admin;
    }

    public String getTitle() { // ✅ Getter
        return title;
    }

    public void setTitle(String title) { // ✅ Setter
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
}
