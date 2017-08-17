'use strict';
var computers = require('../../pages/Computers');
var helper = require('../../helpers/helper');
var self = this;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {

    this.When(/^Search computer by name "([^"]*)"$/, function (computerName, callback) {
        computers.searchComputer(computerName);
        callback();
    });

    this.Then(/^Check that computer with name "([^"]*)" is displayed$/, function (computerName, callback) {
        expect(computers.getTextFromFirstLink()).to.eventually.equal(computerName).and.notify(callback);
    });

    this.Then(/^Check that computer with name "([^"]*)" is in list of computers$/, {timeout: 120 * 1000}, function (computerName, callback) {
        expect(computers.checkThatComputerWithNameIsInListOfComputers(computerName)).to.eventually.equal(true).and.notify(callback);
    });
    this.Then(/^I can verify computers info:$/, function (data, callback) {
        var dataFromTable = data.hashes();
        computers.getListofComps().then(function (data) {
            console.log(data.Computer === dataFromTable.Computer && data.Introduced === dataFromTable.Introduced && data.Discontinued === dataFromTable.Discontinued && data.Company === dataFromTable.Company)
        });
        callback();
    });
    this.Then(/^I clear a search field$/, function (callback) {
        $(computers.selectors.filterByComputerNameField).clear().then(function () {
            return $(computers.selectors.filterByNameButton).click();
        });
        callback();
    });

    var t;
    this.Then(/^I can go to list of computers from "([^"]*)" point$/, function (value, callback) {
        var numberOfclickingNextButton = +value.split('')[0];
        $(computers.selectors.displayingField).getText().then(function (text) {
            t = text.split(" ")[1] + '';
            if (t != value) {
                for (var i = 0; i < numberOfclickingNextButton; i++) {
                    $(computers.selectors.nextButton).click().then(function () {
                    });
                }
            }
        });
        callback();
    });

    this.When(/^I open url$/, function () {
        browser.get('/');
    });

    this.When(/^I click that staff till see comp with name: "([^"]*)"$/, function (compNameToSee, callback) {
        (function process(index) {
            $(computers.selectors.displayingField).getText().then(function (text) {
                t = text.split(" ")[5] + '';
                var maxNumberOfIterations = +(t.split('')[0] + t.split('')[1]);
                if (index >= maxNumberOfIterations) {
                    return;
                }
            });
            computers.checkStaff(compNameToSee).then(function (text) {
                if (text == false) {
                    $(computers.selectors.nextButton).click();
                    process(index + 1);
                }
                else (text == true)
                {
                }
            });
            callback();
        })(0);
    });
};



