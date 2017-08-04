var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var selectors = computers.selectors;
var tableRawName = 'Computer name';
var searchFieldName = 'ASCI Red';
describe('Cover functionality:', function () {

    it('add a new computer', function () {
        computers.searchComputer(selectors.computerAsciName);
        computers.enterTablesRawName(tableRawName);
    });

    it('add a new computer', function () {
        computers.isThereComputerWithSuchName(searchFieldName);
    });
});