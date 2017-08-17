Feature: Delete computer

  Scenario: open url, search computer by name, delete the computer
    When Delete computer with name "Apple747"
    Then Check that message "Done! Computer has been deleted" appeared