package p9;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.util.*;

public class maintest {
	public static void main(String args[]) {
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8000/p9website.html");
//		Select cars = new Select(driver.findElement(By.id("cars")));
//		Select pets = new Select(driver.findElement(By.id("pets")));
//		List<WebElement> carOptions = cars.getOptions();
//		List<WebElement> petOptions = pets.getOptions();
//		System.out.println("Number of options in dropdown cars: " + carOptions.size());
//		System.out.println("Number of options in listbox pets: " + petOptions.size());
		
		Select cars = new Select(driver.findElement(By.id("cars")));
		Select pets = new Select(driver.findElement(By.id("pets")));
		cars.selectByValue("mercedes");
		pets.selectByValue("cat");
	}
}