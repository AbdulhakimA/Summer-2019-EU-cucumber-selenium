@smoke
Feature:user should able to login

@login
  Scenario: login as a driver
    Given the user on the login page
    When the user enter Driver information
    Then the user able to login




    Scenario: login as sales manager
      Given the user on the login page
      When the user enter sales manager information
      Then the user able to login


      Scenario: login as store manager
        Given the user on the login page
        When the user enter store manager information
        Then the user able to login