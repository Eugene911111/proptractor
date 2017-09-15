'use strict';
var computers = require('../../pages/Computers');
var helper = require('../../helpers/helper');

module.exports = function () {

    this.When(/^Add a new computer "([^"]*)" "([^"]*)" times$/, (compName, numberOfComputers) => {
        for (let i = 0; i < numberOfComputers; i++) {
            computers.addNewComputer(compName);
        }
    });

    this.Then(/^Check that message "([^"]*)" appeared$/, {timeout: 220 * 1000}, (message) =>
        helper.expect(computers.getTextFromAlertMessage()).to.eventually.equal(message))
};