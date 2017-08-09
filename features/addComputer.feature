Feature: new

  Scenario: open url click Add computer, fill the fields, press save button
    When add a new computer
    Then check that message about adding computer appeared