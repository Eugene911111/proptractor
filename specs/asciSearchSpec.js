var computers = require('../pages/Computers');
var helper = require('../helpers/helper');
var selectors = computers.selectors;
describe('Cover functionality:', function () {
    var tableRawName = 'Computer name';
    var serchFieldName = 'ASCI Purple';

    it('add a new computer', function () {
        computers.searchComputer(selectors.computerAsciName);
        computers.enterTablesRawName(tableRawName);
    });

    it('add a new computer', function () {
        computers.isThereComputerWithSuchName(serchFieldName);
    });
});