'use strict';
var computers = require('../../pages/Computers');
var helper = require('../../helpers/helper');

module.exports = function () {

    this.When(/^Add a new computer "([^"]*)" "([^"]*)" times$/, (compName, numberOfComputers, callback) => {
        for (var i = 0; i < numberOfComputers; i++) {
            computers.addNewComputer(compName);
        }
        callback();
    });

    this.Then(/^Check that message "([^"]*)" appeared$/, {timeout: 220 * 1000}, (message, callback) => {
        helper.expect(computers.getTextFromAlertMessage()).to.eventually.equal(message).and.notify(callback);
    });
};