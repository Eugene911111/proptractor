var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var computerNameToSearch = 'ASCI';
var computerNameInList = 'ASCI Blue Pacific';
var tableRawName = 'Introduced';
var valueToFind = '01 Jan 1998';

describe('Cover functionality:', function () {

    it('search new computer', function () {
        computers.searchComputer(computerNameToSearch);
    });

    it('add a new computer', function () {
        computers.checkValueFromList(computerNameInList, tableRawName, valueToFind);
    });
});