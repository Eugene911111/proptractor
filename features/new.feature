Feature: Bla bla feature

  Scenario: Do bla bla
  Check that bla bla

    When Search computer by name "ASCI"
    Then Check that computer with name "ASCI Purple" is in list of computers
    Then I can verify computers info:
      | Computer          | Introduced  | Discontinued | Company |
      | ASCI Blue Pacific | 01 Jan 1998 | -            | IBM     |
    Then I can verify computers info:
      | Computer   | Company |
      | ASCI White | IBM     |
    When I clear a search field
    When I can go to list of computers from "31" point
    Then Check that computer with name "Amiga 3000" is in list of computers