var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
browser.ignoreSynchronization = true;
describe('Cover functionality:', function () {

    it('add a new computer', function () {
       computers.addNewComputer();
    });

    it('check that message about adding computer appeared', function () {
       computers.checkAlertMessageIsDisplayed(computers.computerHasBeenCreatedMessage());
    });
});
