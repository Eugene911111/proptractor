'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open tooltip page$/, function () {
        return browser.get('/tooltip/#default/').then(function () {
            return helper.waitForElementToBeVisible($(jquery.selectors.iframe));
        })
    });

    this.When(/^Move mouse to Tooltips link$/, function () {
        return helper.switchToIframe().then(function () {
            return browser.actions().mouseMove($(jquery.selectors.tooltipsLink)).perform()
        }).then(function () {
            return helper.waitForElementToBeVisible($(jquery.selectors.tooltip));
        })
    });

    this.When(/^I check that the tooltip appeared$/, {timeout: 20 * 1000}, function (callback) {
        helper.expect(($(jquery.selectors.tooltip).isDisplayed())).to.eventually.equal(true).and.notify(callback);
    });
};