'use strict';
var jquery = require('../../../pages/Jquery');
var helper = require('../../../helpers/helper');

module.exports = function () {

    this.When(/^I open url Accordion$/, () => {
        return browser.get('/accordion/');
    });

    this.Then(/^I click Section 4$/, () => {
        return helper.switchToIframe().then(() => {
            return $(jquery.selectors.section4Button).click()
        }).then(() => {
            return jquery.checkThatSection4IsOpened();
        })
    });

    this.Then(/^I click Section 1$/, () => {
        return $(jquery.selectors.fieldWithSection1).click().then(() => {
            return browser.wait(helper.EC.invisibilityOf($(jquery.selectors.fieldWithSection4Text)), 5000);
        })
    });

    this.Then(/^I check that text is displayed "([^"]*)"$/, (text, callback) => {
        helper.expect(jquery.getTextFromSection4()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I check that text is not displayed$/, (callback) => {
        helper.expect(jquery.getTextFromSection4()).to.eventually.equal("").and.notify(callback);
    });

};