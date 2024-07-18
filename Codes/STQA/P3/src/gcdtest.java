import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

import org.openqa.selenium.By;


public class gcdtest {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:/app/ChromeDriver/chromedriver-win64/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8000/indexmain.html");
		String pageTitle = driver.getTitle();
		if (pageTitle.equals("GCD Calculator")) {
			System.out.println("Title matched, test case passed, title: "+pageTitle);
		}	
		else {
			System.out.println("Title NOT matched, test case failed");
		}
		
		WebElement textBox1 = driver.findElement(By.id("number1"));
		textBox1.sendKeys("24");
		WebElement textBox2 = driver.findElement(By.id("number2"));
		textBox2.sendKeys("10");
		WebElement calButton = driver.findElement(By.id("subbtn"));
		calButton.click();
		WebElement resultText = driver.findElement(By.id("result"));
		
        driver.manage().timeouts().implicitlyWait(Duration.ofMillis(100));
        
		if (resultText.getText().equals("GCD of 24 and 10 is 2")) {
			System.out.println("Result matched with expected output of 2, test case passed");
		}
		
		try {
			//right anywhere here and select run as > java application
            Thread.sleep(3000);
        }
        catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Close the browser
        driver.quit();
	}

}
