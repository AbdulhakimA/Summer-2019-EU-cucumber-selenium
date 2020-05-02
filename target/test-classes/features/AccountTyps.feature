

  Feature: Account types
    @wip
    Scenario: driver user
      Given the user login as a "driver"
      When the user navigates "Activities" "Calendar Events"
      Then the title contains "Calendar Events"

    @wip
      Scenario: salas manager login
        Given the user login as a "salesM"
        When the user navigates "Customers" "Accounts"
        Then the title contains "All Accounts"



    @wip
    Scenario: store manager login
      Given the user login as a "storeM"
      When the user navigates "Marketing" "Campaigns"
      Then the title contains "Campaignsj"


      Scenario Outline: login with different users

        Given the user login as a "<userType>"
      When the user navigates "<tab>" "<module>"
      Then the title contains "<pageTitle>"
        Examples:

        | userType| tab       | module         | pageTitle          |
        | driver  | Activities| Calendar Events| Calendar Events    |
        | storeM  | Customers | Accounts       | Accounts           |
        | salesM  | Marketing | Campaigns      | All Campaigns      |







      Scenario Outline:login as a given user
      Given the user on the login page
        When the  user login using following credentials
          |username  |<username>            |
          |password  |UserUser123           |
          |first name|<firstname>           |
          |last name |<lastname>            |
        Then the user able to login

        Examples:

        |username       |firstname|lastname|
        |user1          |John     |Doe     |
        |salesmanager101|Peyton   |Harber  |
        |storemanager51 |Geovany  |Jenkins |



    Scenario Outline: Login with different users <usertypes>
      Given the user login as a "<usertypes>"
      When the user navigates "<tab>" "<module>"
      Then the title contains "<title>"
      Examples: drivers
        | usertypes     | tab        | module          | title                |
        | driver        | Fleet      | Vehicles Model  | Vehicles Model       |
        | driver        | Customers  | Accounts        | Accounts             |
        | driver        | Customers  | Contacts        | Contacts             |
        | driver        | Activities | Calendar Events | Calendar Events      |
        | driver        | System     | Jobs            | Jobs                 |
        | salesM        | Fleet      | Vehicles        | All Car              |
        | salesM        | Fleet      | Vehicles Model  | All Vehicles Model   |
        | salesM        | Customers  | Accounts        | All Accounts         |
        | salesM        | Customers  | Contacts        | All Contacts         |
        | salesM        | Activities | Calendar Events | All Calendar Events  |
        | salesM        | System     | Jobs            | All Jobs             |
        | salesM        | Fleet      | Vehicles        | All Car              |
        | salesM        | Fleet      | Vehicles Model  | All Vehicles Model   |
        | salesM        | Customers  | Accounts        | All Accounts         |
        | salesM        | Customers  | Contacts        | All Contacts         |
        | salesM        | Activities | Calendar Events | Calendar Events      |
        | salesM        | System     | Jobs            | All Jobs             |
        | salesM        | System     | Menus           | All Menus            |