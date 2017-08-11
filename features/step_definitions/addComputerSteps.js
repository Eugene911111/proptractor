'use strict';
var computers = require('../../pages/Computers');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {

    this.When(/^Add a new computer "([^"]*)"$/, function (compName, callback) {
        computers.addNewComputer(compName);
        callback();
    });

    this.Then(/^Check that message "([^"]*)" appeared$/, function (message ,callback) {
        expect(computers.getTextFromAlertMessage()).to.eventually.equal(message).and.notify(callback);
    });
};