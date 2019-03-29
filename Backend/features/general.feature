Feature: General endpoints
  As the moneyappbackend service
  I need to conform with the conventions
  So that I am a valid REST service

  Scenario: Root endpoint
    When I go to the / endpoint
    Then it should return OK