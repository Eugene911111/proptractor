'use strict';
var helper = require('../../../helpers/helper');
module.exports = function () {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

    var expect = chai.expect;
    this.When(/^I open page checkboxradio page$/, function () {
        browser.get('/checkboxradio/');
    });

    this.When(/^Select London radiobutton$/, function () {
        helper.switchToIframe();
        element(by.xpath('//label[contains(., "London")]')).click();
    });

    this.When(/^I select 4 Star$/, function () {
        element(by.xpath('//label[contains(., "4 Star")]')).click();
        // browser.sleep(1000);
    });

    this.When(/^I check that London radio button is selected$/, function () {
        var tttt = element(by.xpath('//label[@class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label ui-checkboxradio-checked ui-state-active"][contains(., "London")]'));
        expect(tttt).isPresent().to.equal(true);
    });
};