var Helper = function () {
    var EC = protractor.ExpectedConditions;


    this.waitForTextToBePresentInElement = function (element, text) {
        return expect(browser.wait(EC.textToBePresentInElement(element, text), 5000));
    };

    this.waitForElementToBeVisible = function (element) {
        return expect(browser.wait(EC.visibilityOf(element), 5000));
    };
};

module.exports = new Helper();
