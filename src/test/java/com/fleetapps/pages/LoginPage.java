package com.fleetapps.pages;

import com.fleetapps.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage  {


    public LoginPage(){

        PageFactory.initElements(Driver.get(),this);

    }


    @FindBy(xpath = "(//*[.='Login'])[1]")
    public WebElement LoginButton;

    @FindBy(id = "prependedInput")
    public WebElement usernameInput;

    @FindBy(id = "prependedInput2")
    public WebElement passwordInput;

    @FindBy(id = "_submit")
    public WebElement loginBTO;


    public void login(String username,String password){

        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password);
        loginBTO.click();

    }

}
