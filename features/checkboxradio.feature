Feature: checkboxradio

  Scenario: Open page checkboxradio
  Select London radiobutton
  Check The button is selected
  Select Paris radio button
  Check that london radio button is not selected

    When I open page checkboxradio page
    And Select London radiobutton
    And I select 4 Star
#    Then I check that London radio button is selected
#    When I select Paris radiobutton
#    Then I check that London radio button is not selected