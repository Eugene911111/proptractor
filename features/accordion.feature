Feature: Click accordion

  Scenario: Open url
  Select Section 4
  Check that text is displayed
  Select Section 1
  Check that text is not displayed

    When I open url Accordion
    And I click Section 4
    Then I check that text is displayed "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est."
    When I click Section 1
    Then I check that text is not displayed