Feature: Adding new computer

#  @addComputer
  Scenario: open url click Add computer, fill the fields, press save button, check that alert message appeared
    When Add a new computer "AAAAAAAA3" "1" times
    Then Check that message "Done! Computer AAAAAAAA3 has been created" appeared
