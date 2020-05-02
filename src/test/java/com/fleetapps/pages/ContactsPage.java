package com.fleetapps.pages;

import com.fleetapps.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactsPage extends BasePage{


    public ContactsPage(){
        PageFactory.initElements(Driver.get(),this);


    }


    @FindBy(css = ".input-widget")
    public WebElement pageNUM;




    //create a method that accepts email as string and return Web element based on that email
    public WebElement getContactEmail(String email,String tHead){
        String xpath="//*[text()='"+email+"'][@data-column-label='"+tHead+"']";
        return   Driver.get().findElement(By.xpath(xpath));

    }











}
