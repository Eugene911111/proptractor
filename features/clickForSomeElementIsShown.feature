Feature: Click next button for some text is displayed on page

  Scenario: Open url
  Click for text is not displayed

    When I open url
    When I click that staff till see comp with name: "Amstrad CPC 6128"
    Then Check that computer with name "Amstrad CPC 6128" is in list of computers
