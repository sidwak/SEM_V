/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mainpackage;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Siddhesh
 */
@WebService(serviceName = "MainService")
public class MainService {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
    
    @WebMethod(operationName = "toGrade")
    public String toGrade(@WebParam(name = "percent") double percent) {
        //TODO write your implementation code here:
        if (percent > 90) {
            return "O";
        } else if (percent > 80 & percent <= 90) {
            return "A";
        } else if (70 < percent & percent <= 80) {
            return "B";
        } else if (60 < percent & percent <= 70) {
            return "C";
        } else if (50 < percent & percent <= 60) {
            return "D";
        }else{
            return "F";
        }
    }

}
