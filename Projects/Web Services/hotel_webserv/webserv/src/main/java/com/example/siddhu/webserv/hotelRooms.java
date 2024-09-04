package com.example.siddhu.webserv;

import java.util.HashMap;
import java.util.Map;

public class hotelRooms {
    Map<String, Object>[] luxuryHotels = new HashMap[10];
    public void AddData(){
        luxuryHotels[0] = createHotelMap(
            "The Ritz-Carlton",
            "Elegant hotel offering sophisticated accommodations and fine dining.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            650
        );
        
        luxuryHotels[1] = createHotelMap(
            "Four Seasons Resort",
            "Luxurious resort with beautiful views and top-notch amenities.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            750
        );
        
        luxuryHotels[2] = createHotelMap(
            "The St. Regis",
            "Opulent hotel featuring refined rooms and exceptional service.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            700
        );
        
        luxuryHotels[3] = createHotelMap(
            "Mandarin Oriental",
            "Exclusive hotel with modern elegance and premier hospitality.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            800
        );
        
        luxuryHotels[4] = createHotelMap(
            "Bulgari Resort",
            "High-end resort known for its lavish design and exquisite services.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            850
        );
        
        luxuryHotels[5] = createHotelMap(
            "The Peninsula",
            "Sophisticated hotel offering luxury and unparalleled comfort.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            700
        );
        
        luxuryHotels[6] = createHotelMap(
            "Rosewood Hotel",
            "Chic hotel with refined style and personalized service.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            730
        );
        
        luxuryHotels[7] = createHotelMap(
            "Aman Tokyo",
            "Modern luxury hotel with serene rooms and stunning city views.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            900
        );
        
        luxuryHotels[8] = createHotelMap(
            "Waldorf Astoria",
            "Prestigious hotel known for its grandeur and exceptional amenities.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            750
        );
        
        luxuryHotels[9] = createHotelMap(
            "Conrad Maldives",
            "Exclusive resort with overwater villas and beautiful natural surroundings.",
            "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
            950
        );

        for (Map<String, Object> hotel : luxuryHotels) {
            System.out.println("Hotel Name: " + hotel.get("r_name"));
            System.out.println("Description: " + hotel.get("r_desc"));
            System.out.println("Image URL: " + hotel.get("r_img"));
            System.out.println("Price per Night: $" + hotel.get("r_price"));
            System.out.println();
        }
    }

    public Map<String, Object>[] getRooms(){
        return luxuryHotels;
    }

    private static Map<String, Object> createHotelMap(String name, String desc, String img, int price) {
        Map<String, Object> hotelMap = new HashMap<>();
        hotelMap.put("r_name", name);
        hotelMap.put("r_desc", desc);
        hotelMap.put("r_img", img);
        hotelMap.put("r_price", price);
        return hotelMap;
    }
}
