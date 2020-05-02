package com.fleetapps.step_definitions;

import com.fleetapps.pages.DashboardPage;
import com.fleetapps.pages.LoginPage;
import com.fleetapps.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class ContactsStepDefs {
    @Then("the user should see following modules")
    public void the_user_should_see_following_modules(List<String>menuOptions) {

        System.out.println("menu option size"+menuOptions.size());

        System.out.println(menuOptions);

        DashboardPage dashboardPage=new DashboardPage();

        System.out.println(BrowserUtils.getElementsText(dashboardPage.menuOption));

        List<String>actualMenu=BrowserUtils.getElementsText(dashboardPage.menuOption);

        Assert.assertEquals(menuOptions,actualMenu);
    }


    @When("the  user login using following credentials")
    public void the_user_login_using_following_credentials(Map<String,String>userData) {


        LoginPage loginPage=new LoginPage();
        loginPage.login(userData.get("username"),userData.get("password"));

         DashboardPage dashboardPage =new DashboardPage();

         String fullName=userData.get("first name")+" "+userData.get("last name");

         String actualFullName=dashboardPage.getUserName();

         dashboardPage.waitUntilLoaderScreenDisappear();
         Assert.assertEquals(fullName,actualFullName);
    }


}
