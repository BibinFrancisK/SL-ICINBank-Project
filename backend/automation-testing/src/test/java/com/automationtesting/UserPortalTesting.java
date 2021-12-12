package com.automationtesting;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class UserPortalTesting {

    WebDriver driver;
    public String baseUrl = "http://localhost:4200/login";
    String driverPath = "E:\\Java\\Selenium\\chromedriver.exe";

    @BeforeTest
    public void launchBrowser() {
    	System.setProperty("webdriver.chrome.driver", driverPath);
        driver = new ChromeDriver();
        driver.get(baseUrl);
        driver.manage().window().maximize();
    }

    @Test(priority=0)
    public void userRegistration() throws InterruptedException {    
        driver.findElement(By.linkText("Register Here")).click();
        driver.findElement(By.id("firstName")).sendKeys("Dylan");  
        driver.findElement(By.id("lastName")).sendKeys("Matthew");
        driver.findElement(By.id("accountNumber")).sendKeys("987654321");
        driver.findElement(By.xpath("/html/body/app-root/app-registration/div/div/div[2]/form/div/div[5]/a/span")).click();
        driver.findElement(By.id("password")).sendKeys("testpw");
        driver.findElement(By.id("passwordConfirmation")).sendKeys("testpw");
        driver.findElement(By.linkText("Register Your Account For Net Banking")).click();
        Thread.sleep(7000);
        Alert alert = driver.switchTo().alert();        
        alert.accept();
        
    }
    
    
    @Test(priority=1) 
    public void userLogin() throws InterruptedException{
    	driver.get(baseUrl);
    	Thread.sleep(7000);
    	driver.findElement(By.id("loginUserId")).sendKeys("b7bcB737"); 
    	driver.findElement(By.id("loginUserPassword")).sendKeys("test"); 
    	driver.findElement(By.linkText("Login")).click();
    	Thread.sleep(3000);
    	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/bank/home");
    	
      }
    
    
    @Test(priority=2) 
    public void userAccount() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[1]/li[2]/button")).click(); 
    	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/bank/accounts");
    	Thread.sleep(7000);
      }
    
    
    @Test(priority=3) 
    public void userChequeBookRequest() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[1]/li[3]/button")).click(); 
    	driver.findElement(By.xpath("/html/body/app-root/app-bank/app-cheque-books/div/div/div[1]/button")).click();
    	driver.findElement(By.xpath("/html/body/ngb-modal-window/div/div/div[2]/button[2]")).click();
    	Thread.sleep(7000);
    	Alert alert = driver.switchTo().alert();
        alert.accept();
        Thread.sleep(7000);
      }
    
    
    @Test(priority=4) 
    public void userTransactions() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[1]/li[4]/button")).click(); 
    	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/bank/transactions");
    	Thread.sleep(7000);
      }
    
    @Test(priority=5) 
    public void userTransferMoney() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[1]/li[5]/button")).click(); 
    	driver.findElement(By.id("transferAccountNumber")).sendKeys("987654321");
    	driver.findElement(By.id("transferAccountType")).sendKeys("Savings");
    	driver.findElement(By.xpath("/html/body/app-root/app-bank/app-transfer/div/div/div[2]/form/div/div[4]/div[1]/input")).click();
    	driver.findElement(By.id("tranferAmount")).sendKeys("1500");
    	driver.findElement(By.id("transferMessage")).sendKeys("Payment toward rent");
    	driver.findElement(By.xpath("/html/body/app-root/app-bank/app-transfer/div/div/div[2]/form/div/div[7]/a")).click();
    	Thread.sleep(7000);
    	Alert alert = driver.switchTo().alert();
        alert.accept();
        Thread.sleep(7000);
      }
    
    @Test(priority=6) 
    public void userProfile() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[1]/li[6]/button")).click(); 
    	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/bank/profile");
    	Thread.sleep(7000);
      }
    
    
    @Test(priority=7) 
    public void userLogout() throws InterruptedException{
    	Thread.sleep(7000);
    	driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul[2]/li/button")).click(); 
    	Thread.sleep(7000);
    	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/login");
    	Thread.sleep(7000);
      }
    
    
    @AfterTest
    public void afterMethod() throws InterruptedException {
     // close and quit the browser
    	Thread.sleep(6000);
        driver.quit();
    }
}
