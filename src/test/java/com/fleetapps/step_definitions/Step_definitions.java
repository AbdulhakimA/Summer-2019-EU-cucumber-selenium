package com.fleetapps.step_definitions;

import com.fleetapps.pages.DashboardPage;
import com.fleetapps.pages.LoginPage;
import com.fleetapps.utilities.BrowserUtils;
import com.fleetapps.utilities.ConfigurationReader;
import com.fleetapps.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class Step_definitions {

    @Given("the user on the login page")
    public void the_user_on_the_login_page() {


        Driver.get().get(ConfigurationReader.get("url"));



    }

    @When("the user enter Driver information")
    public void the_user_enter_Driver_information() {
        LoginPage loginPage=new LoginPage();
        String username=ConfigurationReader.get("Drivers");
        String password=ConfigurationReader.get("password");
       loginPage.login(username,password);


    }

    @Then("the user able to login")
    public void the_user_able_to_login() {

        BrowserUtils.waitFor(3);
        Assert.assertEquals("Dashboard",Driver.get().getTitle());

    }

    @When("the user enter sales manager information")
    public void the_user_enter_sales_manager_information() {

        LoginPage loginPage=new LoginPage();

        String username=ConfigurationReader.get("Sales_Manager");
        String password=ConfigurationReader.get("password");

        loginPage.login(username,password);



    }

    @When("the user enter store manager information")
    public void the_user_enter_store_manager_information() {

        LoginPage loginPage=new LoginPage();

        String username=ConfigurationReader.get("Store_Manager");
        String password=ConfigurationReader.get("password");

        loginPage.login(username,password);

    }




    @When("the user login as a driver using {string} and {string}")
    public void the_user_login_as_a_driver_using_and(String username, String password) {

        LoginPage loginPage=new LoginPage();
        loginPage.login(username,password);

    }

    @Then("the title contains {string}")
    public void the_title_contains(String title) {
        DashboardPage dashboardPage=new DashboardPage();

        BrowserUtils.waitFor(2);
        dashboardPage.waitUntilLoaderScreenDisappear();

        System.out.println(dashboardPage.pageSubTitle.getText());

        Assert.assertEquals(title,dashboardPage.pageSubTitle.getText());

    }

}
