
@navigationMenu
Feature: navigation menu test

  Scenario: Fleet--> vehicles
    Given the user on the login page
    And the user enter sales manager information
    When the user go to fleet and vehicle
    Then the url should be http://app.fleetapps.io/entity/Extend_Entity_Carreservation

Scenario: Activities-->Calendar events
    Given the user on the login page
    And the user enter sales manager information
    When the user go to Activities and Calendar events
    Then the url should be http://app.fleetapps.io/calendar/event


Scenario: Marketing -->copaigns
    Given the user on the login page
    And the user enter sales manager information
    When the user go to Marketing and copaigns
    Then the url should be http://app.fleetapps.io/campaign/

