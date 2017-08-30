'use strict';
var jquery = require('../../pages/Jquery');
var helper = require('../../helpers/helper');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var EC = protractor.ExpectedConditions;
var expect = chai.expect;
module.exports = function () {

    this.When(/^I open url Accordion$/, function () {
        browser.get('/accordion/');
    });

    this.Then(/^I click Section 4$/, function () {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);
        $(jquery.selectors.section4Button).click();
        jquery.checkThatSection4IsOpened();
    });

    this.Then(/^I click Section 1$/, function () {
        $(jquery.selectors.fieldWithSection1).click();
        browser.wait(EC.invisibilityOf($(jquery.selectors.fieldWithSection4Text)), 5000);
    });

    this.Then(/^I check that text is displayed "([^"]*)"$/, function (text, callback) {
        expect(jquery.getTextFromSection4()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I check that text is not displayed$/, function (callback) {
        expect(jquery.getTextFromSection4()).to.eventually.equal("").and.notify(callback);
    });
};