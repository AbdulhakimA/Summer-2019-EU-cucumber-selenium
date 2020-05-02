$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTyps.feature");
formatter.feature({
  "name": "Account types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "salas manager login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user login as a \"salesM\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.NavigationMenuStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Customers\" \"Accounts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.NavigationMenuStepDefs.the_user_navigates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cA[ll A]ccounts\u003e but was:\u003cA[]ccounts\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_title_contains(Step_definitions.java:90)\n\tat ✽.the title contains \"All Accounts\"(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/AccountTyps.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "store manager login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user login as a \"storeM\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.NavigationMenuStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Marketing\" \"Campaigns\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.NavigationMenuStepDefs.the_user_navigates(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Campaigns\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Campaigns]\u003e but was:\u003c[Dashboard]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_title_contains(Step_definitions.java:90)\n\tat ✽.the title contains \"Campaigns\"(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/AccountTyps.feature:22)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contacts Page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the  user login using following credentials",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.ContactsStepDefs.the_user_login_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJohn[d] Doe\u003e but was:\u003cJohn[] Doe\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.ContactsStepDefs.the_user_login_using_following_credentials(ContactsStepDefs.java:45)\n\tat ✽.the  user login using following credentials(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/Contacts.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "user should able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "login as a driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@login"
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
  "name": "the user enter Driver information",
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_enter_Driver_information()"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Loading...]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login(Step_definitions.java:40)\n\tat ✽.the user able to login(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/login.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Loading...]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login(Step_definitions.java:40)\n\tat ✽.the user able to login(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/login.feature:16)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as store manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "the user enter store manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.fleetapps.step_definitions.Step_definitions.the_user_enter_store_manager_information()"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Loading...]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.fleetapps.step_definitions.Step_definitions.the_user_able_to_login(Step_definitions.java:40)\n\tat ✽.the user able to login(file:///Users/hakim/Desktop/inteliji/Summer-2019-EU-cucumber-selenium/src/test/resources/features/login.feature:22)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
});