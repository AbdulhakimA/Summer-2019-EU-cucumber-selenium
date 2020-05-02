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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});