'use strict';
var helper = require('../../helpers/helper');
var jquery = require('../../pages/Jquery');
var EC = protractor.ExpectedConditions;
module.exports = function () {

    this.When(/^I open tooltip page$/, function () {
        browser.get('/tooltip/#default/');
    });

    this.When(/^Move mouse to Tooltips link$/, function () {
        helper.switchToIframe();
        browser.actions().mouseMove(element(by.xpath('//body/p[1]/a'))).perform();
    });

    this.When(/^I check that the tooltip appeared$/, function () {
        browser.wait(EC.presenceOf((element(by.xpath(jquery.selectors.tooltip)))), 5000);
    });
};