package com.example.siddhu.webserv;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

//import io.spring.guides.gs_producing_web_service.GetCountryRequest;
//import io.spring.guides.gs_producing_web_service.GetCountryResponse;
import mainservice.*;


@Endpoint
public class webservEndpoint {
    private static final String NAMESPACE_URI = "mainService";

    private webservRepository webservRep;

    @Autowired
    private MainService mainService;

    @Autowired
    public webservEndpoint(webservRepository webservRepo){
        this.webservRep = webservRepo;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "GetHelloRequest")
    @ResponsePayload
    public GetHelloResponse getHelloResponse(@RequestPayload GetHelloRequest request){
        GetHelloResponse response = new GetHelloResponse();
        //mainService.addNewRoom(request.getMessage(), "Best living of your life",
        //"https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
        //"500");
        //
        hotelRooms hotero = new hotelRooms();
        hotero.AddData();
        Map<String, Object>[] rooms = hotero.getRooms();
        for (Map<String, Object> hotel : rooms) {
            mainService.addNewRoom(hotel.get("r_name").toString(), hotel.get("r_desc").toString(),
            hotel.get("r_img").toString(),
            hotel.get("r_price").toString());
        }
        response.setMessage(webservRep.getHelloString() + request.getMessage());
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getRoomsRequest")
    @ResponsePayload
    public GetRoomsResponse getRoomsResponse(@RequestPayload GetRoomsRequest request){
        GetRoomsResponse response = new GetRoomsResponse();
        //RoomDetailsType roomDetails = webservRep.getRoomDetails();
        for(Room room: mainService.getAllRooms()){
            response.getRoomDetails().add(webservRep.convertToRoomDetailsType(room));
        }
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getRoomBookRequest")
    @ResponsePayload
    public GetRoomBookResponse getRoomBookResponse(@RequestPayload GetRoomBookRequest request){
        GetRoomBookResponse response = new GetRoomBookResponse();
        webservRep.printRoomBookRequestData(request);
        Integer randomBookingId = mainService.generateEightDigitNumber();
        mainService.addNewReservation(randomBookingId, request.getFullName(), request.getEmail(), request.getPhone(),
        request.getRoomType(), request.getStayRange().getStartDate(), request.getStayRange().getEndDate());
        String isBooked = randomBookingId.toString();
        response.setBookStatus(isBooked);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getReservModifyRequest")
    @ResponsePayload
    public GetReservModifyResponse getReservModifyResponse(@RequestPayload GetReservModifyRequest request){
        GetReservModifyResponse response = new GetReservModifyResponse();
        System.out.println("bookingId: "+request.getBookingId());
        Reservation modifiedReserv = new Reservation();
        modifiedReserv.setBookingId(Integer.parseInt(request.getBookingId()));
        modifiedReserv.setFullName(request.getFullName());
        modifiedReserv.setEmail(request.getEmail());
        modifiedReserv.setPhone(request.getPhone());
        modifiedReserv.setRoomType(request.getRoomType());
        modifiedReserv.setStayRange_StartDate(request.getStayRange().getStartDate());
        modifiedReserv.setStayRange_EndDate(request.getStayRange().getEndDate());
        mainService.modifyReservationDetails(Integer.parseInt(request.getBookingId()), modifiedReserv);
        String isModified = "reservation_modified";
        response.setModifyStatus(isModified);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getReservIsValidRequest")
    @ResponsePayload
    public GetReservIsValidResponse getReservIsValidResponse(@RequestPayload GetReservIsValidRequest request){
        GetReservIsValidResponse response = new GetReservIsValidResponse();
        System.out.println("bookingId: "+request.getBookingId());
        boolean checkValid = mainService.checkIfBookingIdValid(Integer.parseInt(request.getBookingId()));
        String isReservValid = "false";
        if (checkValid == true){
            isReservValid = "true";
        }
        response.setReservIsValid(isReservValid);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getReservCancelRequest")
    @ResponsePayload
    public GetReservCancelResponse GetReservCancelResponse(@RequestPayload GetReservCancelRequest request){
        GetReservCancelResponse response = new GetReservCancelResponse();
        Integer bookingId = Integer.parseInt(request.getBookingId());
        mainService.cancelReservation(bookingId);
        String message = "cancellation_successfull";
        response.setMessage(message);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getReservDetailsRequest")
    @ResponsePayload
    public GetReservDetailsResponse getReservDetailsResponse(@RequestPayload GetReservDetailsRequest request){
        GetReservDetailsResponse response = new GetReservDetailsResponse();
        System.out.println("bookingId: "+request.getBookingId());
        Reservation curReserv = mainService.getReservationDetails(Integer.parseInt(request.getBookingId()));
        response.setFullName(curReserv.getFullName());
        response.setEmail(curReserv.getEmail());
        response.setPhone(curReserv.getPhone());
        response.setRoomType(curReserv.getRoomType());
        StayRangeType stayRange = new StayRangeType();
        stayRange.setStartDate(curReserv.getStayRange_StartDate());
        stayRange.setEndDate(curReserv.getStayRange_EndDate());
        response.setStayRange(stayRange);
        response.setRName("The Grand Lux");
        response.setRDesc("Best living of your life");
        response.setRImg("https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg");
        response.setRPrice("500");
        return response;
    }

}