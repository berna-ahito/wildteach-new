package com.wildteach.tutoringsystem.entity;

import java.sql.Date;
import jakarta.persistence.*;

@Entity
public class studentEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long student_id;

	private String last_name;
	private String first_name;
	private String middle_name;
	private Date birth_date;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	private String email;
	private String contact_number;
	private String address;
	private String username;
	private String course;

	// 🔧 Changed from 'int' to 'Integer' for null-safe updates
	private Integer year_level;

	private String profileImage;

	@Enumerated(EnumType.STRING)
	private Role role;
	private String password;

	// Added is_active field
	@Column(nullable = false)
	private boolean is_active = true; // Default value is true

	public enum Role {
		Tutee,
		Tutor
	}

	public enum Gender {
		Male,
		Female,
		Other
	}

	public studentEntity() {
	}

	public Long getStudent_id() {
		return student_id;
	}

	public void setStudent_id(Long student_id) {
		this.student_id = student_id;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getMiddle_name() {
		return middle_name;
	}

	public void setMiddle_name(String middle_name) {
		this.middle_name = middle_name;
	}

	public Date getBirth_date() {
		return birth_date;
	}

	public void setBirth_date(Date birth_date) {
		this.birth_date = birth_date;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public Integer getYear_level() {
		return year_level;
	}

	public void setYear_level(Integer year_level) {
		this.year_level = year_level;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	// Getter and Setter for is_active
	public boolean getIs_active() {
		return is_active;
	}

	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
	}

	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	public String getProfileImage() {
		return profileImage;
	}

	public Object map(Object object) {
		throw new UnsupportedOperationException("Unimplemented method 'map'");
	}
}
