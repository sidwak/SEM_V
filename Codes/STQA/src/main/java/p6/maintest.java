package p6;
import java.io.File;
import java.io.IOException;
import java.util.Locale;
import jxl.CellView;
import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.format.UnderlineStyle;
import jxl.write.Label;
import jxl.write.Number;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class maintest {
	private WritableCellFormat timesBoldUnderline;
	private WritableCellFormat times;
	private String inputFile;
	
	public void setOutputFile(String inputFile) {
		this.inputFile = inputFile;
	}
	
	public void write() throws IOException, WriteException {
		File file = new File(inputFile);
		WorkbookSettings wbSettings = new WorkbookSettings();
		wbSettings.setLocale(new Locale("en", "EN"));
		WritableWorkbook workbook = Workbook.createWorkbook(file, wbSettings);
		workbook.createSheet("Report", 0);
		WritableSheet excelSheet = workbook.getSheet(0);
		createLabel(excelSheet);
		createContent(excelSheet);
		workbook.write();
		workbook.close();
	}
	
	private void createLabel(WritableSheet sheet)
		throws WriteException {
		// Lets create a times font
		WritableFont times10pt = new WritableFont(WritableFont.TIMES, 10);
		// Define the cell format
		times = new WritableCellFormat(times10pt);
		// Lets automatically wrap the cells
		times.setWrap(true);
		// Create a bold font with underlines
		WritableFont times10ptBoldUnderline = new WritableFont(
		WritableFont.TIMES, 10, WritableFont.BOLD, false,
		UnderlineStyle.SINGLE);
		timesBoldUnderline = new WritableCellFormat(times10ptBoldUnderline);
		// Lets automatically wrap the cells
		timesBoldUnderline.setWrap(true);
		CellView cv = new CellView();
		cv.setFormat(times);
		cv.setFormat(timesBoldUnderline);
		//cv.setAutosize(true);
		// Write a few headers
		addCaption(sheet, 0, 0, "Student Name");
		addCaption(sheet, 1, 0, "Subject 1");
		addCaption(sheet, 2, 0, "subject 2");
		addCaption(sheet, 3, 0, "subject 3");
	}
	
	private void createContent(WritableSheet sheet) throws WriteException,
	RowsExceededException {
		// Write a few number
		for (int i = 1; i< 10; i++) {
			// First column
			addLabel(sheet, 0, i, "Student " + i);
			// Second column
			addNumber(sheet, 1, i, ((i*i)+10));
			addNumber(sheet, 2, i, ((i*i)+4));
			addNumber(sheet, 3, i, ((i*i)+3));
		}
	}
		
	private void addCaption(WritableSheet sheet, int column, int row, String s) throws RowsExceededException, WriteException {
		Label label;
		label = new Label(column, row, s, timesBoldUnderline);
		sheet.addCell(label);
	}
	
	private void addNumber(WritableSheet sheet, int column, int row,
		Integer integer) throws WriteException, RowsExceededException {
		Number number;
		number = new Number(column, row, integer, times);
		sheet.addCell(number);
	}
	
	private void addLabel(WritableSheet sheet, int column, int row, String s) throws WriteException, RowsExceededException {
		Label label;
		label = new Label(column, row, s, times);
		sheet.addCell(label);
	}
	
	public static void main(String[] args) throws WriteException, IOException {
		maintest test = new maintest();
		test.setOutputFile("C:\\Users\\Siddhesh\\Documents\\Ruia\\SEM V\\SEM_V\\Codes\\STQA\\p6output.xls");
		test.write();
		System.out.println("Please check the result file under C:\\Users\\Siddhesh\\Documents\\Ruia\\SEM V\\SEM_V\\Codes\\STQA\\ ");
	}
}
