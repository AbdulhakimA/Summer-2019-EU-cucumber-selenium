package com.fleetapps.pages;


import com.fleetapps.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CalendarEventsPage extends BasePage {


    public CalendarEventsPage(){

        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "//*[@id='container']/div[2]/div/div/div[2]/div/a")
    public WebElement CreateCalendarEvent;

}
