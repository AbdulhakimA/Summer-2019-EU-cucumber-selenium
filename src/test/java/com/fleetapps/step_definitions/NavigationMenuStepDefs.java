package com.fleetapps.step_definitions;

import com.fleetapps.pages.ContactsPage;
import com.fleetapps.pages.DashboardPage;
import com.fleetapps.pages.LoginPage;
import com.fleetapps.utilities.BrowserUtils;
import com.fleetapps.utilities.ConfigurationReader;
import com.fleetapps.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class NavigationMenuStepDefs {

    @When("the user go to fleet and vehicle")
    public void the_user_go_to_fleet_and_vehicle() {
        System.out.println("i go to the fleet and vehicle ");
    }

    @Then("the url should be http:\\/\\/app.fleetapps.io\\/entity\\/Extend_Entity_Carreservation")
    public void the_url_should_be_http_app_fleetapps_io_entity_Extend_Entity_Carreservation() {
        System.out.println("the expected url is http:/app.fleetapps.io/entity/Extend_Entity_Carreservation");
    }

    @When("the user go to Activities and Calendar events")
    public void the_user_go_to_Activities_and_Calendar_events() {
        System.out.println("i go to the activities and calendar events ");
    }

    @Then("the url should be http:\\/\\/app.fleetapps.io\\/calendar\\/event")
    public void the_url_should_be_http_app_fleetapps_io_calendar_event() {
        System.out.println("the expected url is http://app.fleetapps.io/calendar/event");
    }

    @When("the user go to Marketing and copaigns")
    public void the_user_go_to_Marketing_and_copaigns() {
        System.out.println("i go to the marketing and compaigns");
    }

    @Then("the url should be http:\\/\\/app.fleetapps.io\\/campaign\\/")
    public void the_url_should_be_http_app_fleetapps_io_campaign() {
        System.out.println("the expected url is http://app.fleetapps.io/campaign/");
    }

    @When("the user navigates {string} {string}")
    public void the_user_navigates(String tab, String module) {



       new DashboardPage().navigateToModule(tab,module);


    }

    @Then("default page number should be {int}")
    public void default_page_number_should_be(Integer pageN) {

        ContactsPage contactsPage=new ContactsPage();

         Integer actualpage= Integer.parseInt(contactsPage.pageNUM.getAttribute("value"));

        Assert.assertEquals(actualpage,pageN);

    }
    @When("the user login as a {string}")
    public void the_user_login_as_a(String user) {

        Driver.get().get(ConfigurationReader.get("url"));
        LoginPage loginPage=new LoginPage();
        String username=null;
        String password=null;
        if (user.equals("driver")){
             username=ConfigurationReader.get("Drivers");
             password=ConfigurationReader.get("password");

        }else if (user.equals("storeM")){
             username=ConfigurationReader.get("Store_Manager");
             password=ConfigurationReader.get("password");

        }else if (user.equals("salesM")){
             username=ConfigurationReader.get("Sales_Manager");
             password=ConfigurationReader.get("password");


        }
        loginPage.login(username,password);


    }

}
