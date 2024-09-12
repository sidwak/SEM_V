package p8;
import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class maintest {
	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.guru99.com/test/login.html");
		driver.findElement(By.id("email")).sendKeys("someone@example.com");
		driver.findElement(By.id("passwd")).sendKeys("password");
		System.out.println("Email and password entered");
		driver.findElement(By.id("SubmitLogin")).click();
		System.out.println("Submit clicked");
		
		driver.get("https://demo.guru99.com/test/login.html");
		WebElement email = driver.findElement(By.id("email"));
		WebElement password = driver.findElement(By.id("passwd"));
		email.clear();
		password.clear();
		System.out.println("Email and password cleared");
		email.sendKeys("someone@example.com");
		password.sendKeys("password");
		System.out.println("Email and password entered");
		driver.findElement(By.id("SubmitLogin")).click();
		System.out.println("Submit clicked");
		
		driver.get("https://demo.guru99.com/test/radio.html");
		driver.findElement(By.id("vfb-7-1")).click();
		System.out.println("Radio option 1 selected");
		driver.findElement(By.id("vfb-7-2")).click();
		System.out.println("Radio option 2 selected");
		driver.findElement(By.id("vfb-7-3")).click();
		System.out.println("Radio option 3 selected");
		driver.findElement(By.id("vfb-6-0")).click();
		System.out.println("Checkbox 1 selected");
		
		driver.get("https://demo.guru99.com/test/facebook.html");
		WebElement checkbox = driver.findElement(By.id("persist_box"));
		for (int i = 0; i < 2; i++) {
			checkbox.click();
			System.out.println("Facebook persists checkbox status is " + checkbox.isSelected());
		}
	}
}
