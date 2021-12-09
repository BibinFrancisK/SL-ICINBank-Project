package com.automationtesting;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class AdminPortalTesting {
	
	WebDriver driver;
    public String baseUrl = "http://localhost:4200/admin";
    String driverPath = "E:\\Java\\Selenium\\chromedriver.exe";

    @BeforeTest
    public void launchBrowser() {
    	System.setProperty("webdriver.chrome.driver", driverPath);
        driver = new ChromeDriver();
        driver.get(baseUrl);
        driver.manage().window().maximize();
    }

        
        @Test(priority=0)
        public void adminLogin() throws InterruptedException{ 
        	
        	driver.findElement(By.id("adminUsername")).sendKeys("admin");
        	driver.findElement(By.id("adminPassword")).sendKeys("icinbank");
        	driver.findElement(By.linkText("Login")).click();
        	Thread.sleep(7000);
        	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/admin/options");
        }
        
     /*   @Test(priority=1)
        public void manageBlockedAccounts() throws InterruptedException{ 
        	
        	driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-list/div/div/div[2]/form/div/div[2]/a")).click();
        	Thread.sleep(3000);
        	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/admin/blocked-accounts");
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-block-accounts/div/div[2]/table/tr[2]/td[4]/button")).click();
        	Thread.sleep(3000);
        	Alert alert = driver.switchTo().alert();
            String msg = alert.getText();
            alert.accept();
            System.out.println(msg);
            Thread.sleep(3000);
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-block-accounts/div/div[1]/span[1]")).click();
            Thread.sleep(1000);

        } */
        
        @Test(priority=2)
        public void manageChequeBookRequests() throws InterruptedException{ 
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-list/div/div/div[2]/form/div/div[3]/a/span")).click();
            Thread.sleep(1000);
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-cheque-requests/div/div[2]/table/tr[2]/td[5]/span")).click();
            Thread.sleep(3000);
        	Alert alert = driver.switchTo().alert();
            String msg = alert.getText();
            alert.accept();
            System.out.println(msg);
            Thread.sleep(3000);
            //driver.findElement(By.cssSelector("button[class=\"col ml-4 btn btn-danger text-center\"]")).click();
            //PROBLEM CLICKING BACK BUTTON
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-cheque-requests/div/div[1]/span[1]")).click();
            Thread.sleep(1000);
        	
        }
        
  /*
        @Test(priority=3)
        public void manageUserTransactions() throws InterruptedException{ 
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-list/div/div/div[2]/form/div/div[4]/a")).click();
            Thread.sleep(1000);
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-transaction-requests/div/div[2]/table/tr[2]/td[8]/button")).click();
            Thread.sleep(3000);
        	Alert alert = driver.switchTo().alert();
            String msg = alert.getText();
            alert.accept();
            System.out.println(msg);
            Thread.sleep(3000);
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-block-accounts/div/div[1]/span[1]")).click();
            Thread.sleep(1000);  	
        }
        
        
        @Test(priority=4)
        public void adminLogout() throws InterruptedException{ 
            driver.findElement(By.xpath("/html/body/app-root/app-admin/app-admin-list/div/div/div[2]/form/div/div[5]/a")).click();
            Thread.sleep(3000);
            Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/admin/login");     	
        }
        
        
        @Test(priority=5)
        public void invalidLogin() throws InterruptedException{ 
        	
        	driver.findElement(By.id("adminUsername")).sendKeys("admin");
        	driver.findElement(By.id("adminPassword")).sendKeys("wrongpw");
        	driver.findElement(By.linkText("Login")).click();
        	Thread.sleep(3000);
        	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/admin/login");
        }
        
        */
        
        
        @AfterTest
        public void afterMethod() throws InterruptedException {
         // close and quit the browser
        	Thread.sleep(6000);
            driver.quit();
        } 
  
}
