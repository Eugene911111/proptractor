Feature: Adding new computer

#  @addComputer
  Scenario: open url click Add computer, fill the fields, press save button, check that alert message appeared
    When Add a new computer "AAAAAAAA1" "1" times
    Then Check that message "Done! Computer AAAAAAAA1 has been created" appeared
