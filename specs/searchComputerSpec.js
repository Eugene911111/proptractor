var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
browser.ignoreSynchronization = true;
describe('Cover functionality:', function () {

    it('search added computer by name', function () {
        computers.searchComputer(computers.computerName());
    });

    it('search added computer by name', function () {
        computers.checkAfterSearch();
    });
});