Feature: Select Date on datepicker

  Scenario: Open datepicker page
  Select date
  Check that date is selected

    When I open datepicker page
    And Select date
    Then I check
#    Then I check that the date is selected correct