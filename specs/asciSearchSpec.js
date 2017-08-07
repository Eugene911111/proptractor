var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var tableRawName = 'Computer name';
var valueToFind = 'ASCI Blue Pacific';
describe('Cover functionality:', function () {

    it('add a new computer', function () {
        computers.searchComputer('ASCI');
    });

    it('add a new computer', function () {
       computers.setRawName(tableRawName,valueToFind);
    });
});