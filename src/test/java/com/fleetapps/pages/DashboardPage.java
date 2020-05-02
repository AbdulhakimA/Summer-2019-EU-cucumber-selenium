package com.fleetapps.pages;

import com.fleetapps.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage extends BasePage  {

public DashboardPage(){
    PageFactory.initElements(Driver.get(),this);
}
}
