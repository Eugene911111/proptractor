Feature: Click next button for some text is displayed on page

  Scenario: Open url
  Click for computer name is displayed

    When I open url
    When I click that staff till see comp with name: "ASCI Thors Hammer"
    Then Check that computer with name "ASCI Thors Hammer" is in list of computers
