package com.example.siddhu.webserv;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainService {
    @Autowired
    public RoomRepository roomRepository;

    @Autowired
    public ReservationRepository reservationRepository;

    public void addNewRoom(String name, String descp, String img, String price){
        Room newRoom = new Room();
        newRoom.setName(name);
        newRoom.setDescp(descp);
        newRoom.setImg(img);
        newRoom.setPrice(price);
        roomRepository.save(newRoom);
    }

    public int generateEightDigitNumber() {
        Random random = new Random();
        int number = 10000000 + random.nextInt(90000000);
        return number;
    }

    public Iterable<Room> getAllRooms(){
        for (Room rm :roomRepository.findAll()){
            System.out.println(rm);
        }
        return roomRepository.findAll();
    }

    public void addNewReservation(Integer bookingId, String fullName, String email, String phone,
    String roomType, String stayRange_StartDate, String stayRange_EndDate){
        Reservation newReservation = new Reservation();
        newReservation.setBookingId(bookingId);
        newReservation.setFullName(fullName);
        newReservation.setEmail(email);
        newReservation.setPhone(phone);
        newReservation.setRoomType(roomType);
        newReservation.setStayRange_StartDate(stayRange_StartDate);
        newReservation.setStayRange_EndDate(stayRange_EndDate);
        reservationRepository.save(newReservation);
    }

    public Reservation getReservationDetails(Integer bookingId){
        Optional<Reservation> foundReservation = reservationRepository.findById(bookingId);
        if (foundReservation.isPresent() == false){
            System.out.println("Booking Id not found");
        }
        return foundReservation.get();
    }

    public void modifyReservationDetails(Integer bookingId, Reservation curReserv){
        Optional<Reservation> foundReservation = reservationRepository.findById(bookingId);
        if (foundReservation.isPresent() == false){
            System.out.println("Booking Id not found");
        }
        else {
            foundReservation.get().setFullName(curReserv.getFullName());
            foundReservation.get().setEmail(curReserv.getEmail());
            foundReservation.get().setPhone(curReserv.getPhone());
            foundReservation.get().setRoomType(curReserv.getRoomType());
            foundReservation.get().setStayRange_StartDate(curReserv.getStayRange_StartDate());
            foundReservation.get().setStayRange_EndDate(curReserv.getStayRange_EndDate());
            System.out.println(curReserv);
            System.out.println(foundReservation.get().getFullName());
            reservationRepository.save(foundReservation.get());
        }
    }

    public void cancelReservation(Integer bookingId){
        Optional<Reservation> foundReservation = reservationRepository.findById(bookingId);
        if (foundReservation.isPresent() == false){
            System.out.println("Booking Id not found");
        }
        else {
            reservationRepository.deleteById(bookingId);
        }
    }

    public boolean checkIfBookingIdValid(Integer bookingId){
        Optional<Reservation> foundReservation = reservationRepository.findById(bookingId);
        if (foundReservation.isPresent() == false){
            return false;
        }
        else {
            return true;
        }
    }
}
