package com.fleetapps.pages;

import com.fleetapps.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class CreateCalendarEventsPage extends BasePage{

    public  CreateCalendarEventsPage(){

        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(css="[id^='recurrence-repeat-view']")
    public WebElement repeat;

    @FindBy(css = "[id^=recurrence-repeats-view]")
    public WebElement repeatOptionDROPD;

    @FindBy(className = "select2-chosen")
    public WebElement selectedOwner;

    @FindBy(css = "input[id^=oro_calendar_event_form_title-uid-5e989abd6e145]")
    public WebElement title;


    @FindBy(css = "[id^=date_selector_oro_calendar_event_form_start-uid-5e98a06762680")
    public  WebElement startDate;
    @FindBy(css = "[id^=time_selector_oro_calendar_event_form_start-uid-5e98a06762680")
    public WebElement startTime;

    @FindBy(css = "[id^=date_selector_oro_calendar_event_form_end-uid-5e98a0676276b")
    public WebElement endDate;
    @FindBy(css= "[id^=time_selector_oro_calendar_event_form_end-uid-5e98a0676276b")
    public WebElement endTime;

    @FindBy(xpath = "(//*[@*='radio'])[1]")
    public WebElement days;

    @FindBy(xpath = "(//*[@*='radio'])[2]")
    public WebElement weekday;

    @FindBy(xpath = "(//*[@*='radio'])[3]")
    public WebElement never;

    @FindBy(xpath = "(//*[@*='radio'])[4]")
    public WebElement after;

    @FindBy(xpath = "(//*[@*='radio'])[5]")
    public WebElement by;

    public Select repeatOptionList(){
        return  new Select(repeatOptionDROPD);
    }

}
