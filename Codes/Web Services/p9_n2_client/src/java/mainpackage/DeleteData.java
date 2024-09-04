/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mainpackage;

/**
 *
 * @author Siddhesh
 */
public class DeleteData {
    public static void deleteDataOperation(String id){
        employeDataClient client = new employeDataClient();
        client.remove(id);
    }
}
