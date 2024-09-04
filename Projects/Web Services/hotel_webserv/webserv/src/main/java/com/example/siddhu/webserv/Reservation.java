package com.example.siddhu.webserv;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Reservation {
    @Id
    private Integer bookingId;
    private String fullName;
    private String email;
    private String phone;
    private String roomType;
    private String stayRange_StartDate;
    private String stayRange_EndDate;
    
    public Integer getBookingId() {
        return bookingId;
    }
    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getRoomType() {
        return roomType;
    }
    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
    public String getStayRange_StartDate() {
        return stayRange_StartDate;
    }
    public void setStayRange_StartDate(String stayRange_StartDate) {
        this.stayRange_StartDate = stayRange_StartDate;
    }
    public String getStayRange_EndDate() {
        return stayRange_EndDate;
    }
    public void setStayRange_EndDate(String stayRange_EndDate) {
        this.stayRange_EndDate = stayRange_EndDate;
    }
}
