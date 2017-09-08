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

    this.switchToIframe = () => {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        return browser.switchTo().frame(el);
    };

    this.switchToDefaultFrame = () => {
        return browser.switchTo().defaultContent();
    };
    let fs = require('fs');

    function writeScreenShot(data, filename) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    this.takeScreen = () => {
        return browser.takeScreenshot().then((png) => {
            return writeScreenShot(png, 'exception1234.png');
        })
    };

    this.scrollToElement = (element) => {
        return browser.executeScript('arguments[0].scrollIntoView()', element);
    }
};
module.exports = new Helper();
