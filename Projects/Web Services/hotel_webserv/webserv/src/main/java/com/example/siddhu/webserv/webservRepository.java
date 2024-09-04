package com.example.siddhu.webserv;

//import io.spring.guides.gs_producing_web_service.Country;
//import io.spring.guides.gs_producing_web_service.Currency;
import mainservice.*;
import org.springframework.stereotype.Component;

@Component
public class webservRepository {
    public String getHelloString(){
        return "This is hellow world";
    }

    public RoomDetailsType getRoomDetails(){
        RoomDetailsType roomDetails = new RoomDetailsType();
        roomDetails.setRName("The Grand Lux");
        roomDetails.setRDesc("Best living of your life");
        roomDetails.setRImg("https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg");
        roomDetails.setRPrice("500");
        return roomDetails;
    }

    public RoomDetailsType convertToRoomDetailsType(Room room){
        RoomDetailsType roomDetails = new RoomDetailsType();
        roomDetails.setRName(room.getName());
        roomDetails.setRDesc(room.getDescp());
        roomDetails.setRImg(room.getImg());
        roomDetails.setRPrice(room.getPrice());
        return roomDetails;
    }

    public void printRoomBookRequestData(GetRoomBookRequest request){
        System.out.println("fullName: "+request.getFullName());
        System.out.println("email: "+request.getEmail());
        System.out.println("phone: "+request.getPhone());
        System.out.println("roomType: "+request.getRoomType());
    }

    
}
