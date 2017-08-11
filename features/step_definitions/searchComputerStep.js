'use strict';
var computers = require('../../pages/Computers');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {

    this.When(/^Search computer by name "([^"]*)"$/, function (computerName, callback) {
        computers.searchComputer(computerName);
        callback();
    });

    this.Then(/^Check that computer with name "([^"]*)" is displayed/, function (computerName ,callback) {
        expect(computers.getTextFromFirstLink()).to.eventually.equal(computerName).and.notify(callback);
    });
};