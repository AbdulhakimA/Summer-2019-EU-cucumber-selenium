$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "user should able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "login as sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@salesM"
    },
    {
      "name": "@login"
    },
    {
      "name": "@fleet_apps"
    }
  ]
});
formatter.step({
  "name": "the user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter sales manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_enter_sales_manager_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cDashboard[f]\u003e but was:\u003cDashboard[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login(Step_definitions.java:39)\n\tat ✽.the user able to login(file:///Users/hakim/Desktop/Summer-2019-EU-cucumber-selenium/src/test/resources/features/login.feature:16)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});