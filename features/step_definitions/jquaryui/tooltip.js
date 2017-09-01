'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');
var EC = protractor.ExpectedConditions;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
module.exports = function () {

    this.When(/^I open tooltip page$/, function () {
        browser.get('/tooltip/#default/');
        helper.waitForElementToBeVisible($(jquery.selectors.iframe));
    });

    this.When(/^Move mouse to Tooltips link$/, function () {
        helper.switchToIframe().then(function () {
            browser.actions().mouseMove($(jquery.selectors.tooltipsLink)).perform();
        })
    });

    this.When(/^I check that the tooltip appeared$/, {timeout: 20 * 1000}, function (callback) {
        helper.waitForElementToBeVisible($(jquery.selectors.tooltip));
        expect($(jquery.selectors.tooltip).isDisplayed()).to.eventually.equal(true).and.notify(callback);
    });
};