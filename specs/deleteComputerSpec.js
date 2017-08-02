var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
browser.ignoreSynchronization = true;
describe('Cover functionality:', function () {

    it('delete computer', function () {
        computers.deleteComputeByName(computers.computerName());
    });

    it('delete updated computer', function () {
        computers.checkComputerHasBeenDeleted();
    })
});