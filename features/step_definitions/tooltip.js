'use strict';
var helper = require('../../helpers/helper');
var EC = protractor.ExpectedConditions;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
module.exports = function () {

    this.When(/^I open tooltip page$/, function () {
        browser.get('/tooltip/#default/');
    });

    this.When(/^Move mouse to Tooltips link$/, function () {
        helper.switchToIframe();
        browser.actions().mouseMove(element(by.xpath('//body/p[1]/a'))).perform();
    });

    this.When(/^I check that the tooltip appeared$/, function () {
        browser.wait(EC.presenceOf((element(by.xpath('//div[@class="ui-helper-hidden-accessible"]/div[contains(., "That\'s what this widget is")]')))), 5000);
    });
};