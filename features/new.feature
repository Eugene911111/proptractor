Feature: Bla bla feature

  Scenario: Search computer by name
    Check that comp with some name is displayed
    Verify information about computers from the data table
    Clear search
    Click to some page and check that some computer is displayed

    When Search computer by name "ASCI"
    Then Check that computer with name "ASCI Blue Mountain" is in list of computers
    Then I can verify computers info:
      | Computer name     | Introduced  | Discontinued | Company |
      | ASCI Blue Pacific | 01 Jan 1998 | -            | IBM     |
    Then I can verify computers info:
      | Computer name | Company |
      | ASCI White    | IBM     |
    When I clear a search field
    When I can go to list of computers from "31" point
    Then Check that computer with name "Amiga 3000" is in list of computers