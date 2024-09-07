package p7;

import java.io.File;
import java.io.IOException;
import jxl.Workbook;
import jxl.read.biff.BiffException;

public class maintest {
	public static void main(String[] args) throws IOException, BiffException {
        Workbook workbook = Workbook.getWorkbook(new File("C:\\Users\\Siddhesh\\Documents\\Ruia\\SEM V\\SEM_V\\Codes\\STQA\\p6output.xls"));
    	jxl.Sheet sheet = workbook.getSheet(0);
        int studentCountAbove60 = 0;
        
        System.out.println("Student Name\tSubject 1\tSubject 2\tSubject 3");
        for (int i = 1; i<sheet.getRows(); i++) {
            String studentName = sheet.getCell(0, i).getContents();
            int subject1Score = Integer.parseInt(sheet.getCell(1, i).getContents());
            int subject2Score = Integer.parseInt(sheet.getCell(2, i).getContents());
            int subject3Score = Integer.parseInt(sheet.getCell(3, i).getContents());
            if (subject1Score > 60 || subject2Score > 60 || subject3Score > 60) {
        		System.out.println(studentName + "\t\t" + subject1Score + "\t\t" + subject2Score + "\t\t" + subject3Score);
                studentCountAbove60++;
            }
        }
        System.out.println("Student count with marks >60: " + studentCountAbove60);
        workbook.close();
    }
}
