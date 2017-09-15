'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open tooltip page$/, () => browser.get('/tooltip/#default/')
        .then(() => helper.waitForElementToBeVisible($(jquery.selectors.iframe)))
    );

    this.When(/^Move mouse to Tooltips link$/, () => helper.switchToIframe()
        .then(() => browser.actions().mouseMove($(jquery.selectors.tooltipsLink)).perform())
        .then(() => helper.waitForElementToBeVisible($(jquery.selectors.tooltip)))
    );

    this.When(/^I check that the tooltip appeared$/, () =>
        helper.expect(($(jquery.selectors.tooltip).isDisplayed())).to.eventually.equal(true));
};