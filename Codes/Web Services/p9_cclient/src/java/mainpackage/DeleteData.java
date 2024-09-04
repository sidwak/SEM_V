package mainpackage;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Siddhesh
 */
public class DeleteData {
    public static void deldata(String id)
    {
    String a=id;
    userDataClient ob=new userDataClient();
    ob.remove(a);
    //System.out.println("Data is deleted");
    }
}
