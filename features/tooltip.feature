Feature: Check tooltip appearance
  Scenario: Open page
    Move mouse to Tooltips link
    Check tooltip appeared

    When  I open tooltip page
    And Move mouse to Tooltips link
    Then I check that the tooltip appeared