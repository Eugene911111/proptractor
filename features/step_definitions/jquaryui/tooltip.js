'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');
var self = this;
module.exports = function () {

    this.When(/^I open tooltip page$/, () => {
        return browser.get('/tooltip/#default/').then(() => {
            return helper.waitForElementToBeVisible($(jquery.selectors.iframe));
        })
    });

    this.When(/^Move mouse to Tooltips link$/, () => {
        return helper.switchToIframe().then(() => {
            return browser.actions().mouseMove($(jquery.selectors.tooltipsLink)).perform()
        }).then(() => {
            return helper.waitForElementToBeVisible($(jquery.selectors.tooltip));
        })
    });

    this.When(/^I check that the tooltip appeared$/, (callback) => {
        helper.expect(($(jquery.selectors.tooltip).isDisplayed())).to.eventually.equal(true).and.notify(callback);
    });
};