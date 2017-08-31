'use strict';
var helper = require('../../helpers/helper');
var EC = protractor.ExpectedConditions;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
module.exports = function () {

    this.When(/^I open droppable page$/, function () {
        browser.get('/droppable/#default/');
    });

    this.When(/^I drag and drop the element$/, function () {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);
        browser.actions().dragAndDrop($('.ui-widget-content.ui-draggable.ui-draggable-handle'), $('.ui-widget-header.ui-droppable')).mouseUp().perform();
    });

    this.When(/^The drop zone become highlight$/, function () {
        expect(browser.wait(EC.textToBePresentInElement($('.ui-widget-header.ui-droppable.ui-state-highlight p'), 'Dropped!'), 5000));
        expect($('.ui-widget-header.ui-droppable.ui-state-highlight').getCssValue("background-color")).to.eventually.equal("rgba(255, 250, 144, 1)");
    });
};