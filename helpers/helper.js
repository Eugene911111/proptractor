var Helper = function () {
    var EC = protractor.ExpectedConditions;
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

    var expect = chai.expect;

    this.waitForTextToBePresentInElement = function (element, text) {
        return expect(browser.wait(EC.textToBePresentInElement(element, text), 15000));
    };

    this.waitForElementToBeVisible = function (element) {
        return expect(browser.wait(EC.visibilityOf(element), 15000));
    };

};

module.exports = new Helper();
