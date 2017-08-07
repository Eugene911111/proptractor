var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var computerName = 'ASCI';
var tableRawName = 'Computer name';
var valueToFind = 'ASCI Blue Pacific';

describe('Cover functionality:', function () {

    it('add a new computer', function () {
        computers.searchComputer(computerName);
    });

    it('add a new computer', function () {
       computers.setRawNameAndValueToFind(tableRawName,valueToFind);
    });
});