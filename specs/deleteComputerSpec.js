let computers = require('../../pages/Computers');
let selectors = computers.selectors;
describe('Cover functionality:', function () {

    it('delete computer', function () {
        computers.deleteComputeByName(selectors.computerName);
    });

    it('delete updated computer', function () {
        computers.checkComputerHasBeenDeleted();
    })
});