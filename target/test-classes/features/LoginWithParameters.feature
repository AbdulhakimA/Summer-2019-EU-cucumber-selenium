


  Feature: login with parameters


    Scenario: login as a driver
      Given the user on the login page
      When the user login as a driver using "user1" and "UserUser123"
      Then the user able to login
      And the title contains "Dashboard"

      Scenario: login as a salas manager

        Given the user on the login page
        When the user login as a driver using "storemanager51" and "UserUser123"
        Then the user able to login
  @driver
    Scenario: menu option
    Given the user on the login page
    When the user login as a "storeM"
    Then the user should see following modules
  |Dashboards|
  |Fleet     |
  |Customers |
  |Sales     |
  |Activities|
  |Marketing |
  |Reports & Segments|
  |System            |

