var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var computerName = 'ASCI';
var comp = 'ASCI Blue Pacific';
var tableRawName = 'Company';
var valueToFind = 'IBM';

describe('Cover functionality:', function () {

    it('search new computer', function () {
        computers.searchComputer(computerName);
    });

    it('add a new computer', function () {
        computers.checkValueFromList(comp, tableRawName, valueToFind);
    });
});