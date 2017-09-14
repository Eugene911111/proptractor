'use strict';
let jquery = require('../../../pages/Jquery');
let helper = require('../../../helpers/helper');

module.exports = function () {

    this.When(/^I open url Accordion$/, () => browser.get('/accordion/'));

    this.Then(/^I click Section 4$/, () => helper.switchToIframe()
        .then(() => $(jquery.selectors.section4Button).click())
        .then(() => jquery.checkThatSection4IsOpened())
    );

    this.Then(/^I click Section 1$/, () => $(jquery.selectors.fieldWithSection1).click()
        .then(() => browser.wait(helper.EC.invisibilityOf($(jquery.selectors.fieldWithSection4Text)), 5000))
    );

    this.Then(/^I check that text is displayed "([^"]*)"$/, (text, callback) => {
        helper.expect(jquery.getTextFromSection4()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I check that text is not displayed$/, callback => {
        helper.expect(jquery.getTextFromSection4()).to.eventually.equal("").and.notify(callback);
    });

};