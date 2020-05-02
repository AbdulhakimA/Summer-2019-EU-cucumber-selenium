package com.fleetapps.step_definitions;

import com.fleetapps.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import javax.xml.crypto.Data;

public class Hooks {


 @After
    public void tearDawn(Scenario scenario){

     //if the scenario fails take the screenshot
     if(scenario.isFailed()){
         final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
         scenario.embed(screenshot,"image/png");
     }

     Driver.closeDriver();
 }

}
