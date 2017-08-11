var myStepDefinitionsWrapper = function () {
    var computers = require('../pages/Computers');
    var selectors = computers.selectors;

    this.When(/^add a new computer$/, function () {
        computers.addNewComputer();
    });

    this.Then(/^check that message about adding computer appeared$/, function () {
        computers.checkAlertMessageIsDisplayed(selectors.computerHasBeenCreatedMessage);
    });


    this.Given(/^I'm on page$/, function (callback)  {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;