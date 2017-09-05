var Helper = function () {
    var self = this;

    this.EC = protractor.ExpectedConditions;
    this.expect = function (toExpect) {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        var expect = chai.expect;
        return expect(toExpect);
    };

    this.waitForTextToBePresentInElement = function (element, text) {
        return this.expect(browser.wait(self.EC.textToBePresentInElement(element, text), 15000));
    };

    this.waitForElementToBeVisible = function (element) {
        return this.expect(browser.wait(self.EC.visibilityOf(element), 15000));
    };

    this.switchToIframe = function () {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        return browser.switchTo().frame(el);
    };

    this.switchToDefaultFrame = function () {
       return browser.switchTo().defaultContent();
    }

};

module.exports = new Helper();
