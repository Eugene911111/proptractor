var Helper = function () {
    var EC = protractor.ExpectedConditions;

    this.waitForTextToBePresentInElement = function (element, text) {
        return expect(browser.wait(EC.textToBePresentInElement(element, text), 5000));
    };
};

module.exports = new Helper();
