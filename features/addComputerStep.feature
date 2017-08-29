Feature: Adding new computer

  @addComputer
  Scenario: open url click Add computer, fill the fields, press save button, check that alert message appeared
    When Add a new computer "AAAAAAAA" "2" times
    Then Check that message "Done! Computer 11111111111111111 has been created" appeared