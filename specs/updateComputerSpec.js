var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
browser.ignoreSynchronization = true;
describe('Cover functionality:', function () {

    it('update computer name', function () {
       computers.upDateComputerName(computers.computerName(), computers.computerNameAfterEdit());
    });

    it('update computer name', function () {
       computers.checkThatNewNameIsSaved(computers.computerNameAfterEdit());
    });
});