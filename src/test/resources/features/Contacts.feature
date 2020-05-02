

Feature: Contacts Page

  Background:
    Given the user on the login page

  Scenario: Default page number
    And the user enter sales manager information
    When the user navigates "Customers" "Contacts"
    Then default page number should be 1



@smoke
    Scenario: login as a given user
      When the  user login using following credentials
      |username  |user1      |
      |password  |UserUser123|
      |first name|Johnd       |
      |last name |Doe        |
      Then the user able to login