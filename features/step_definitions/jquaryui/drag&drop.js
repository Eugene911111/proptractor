'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');
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
        helper.switchToIframe();
        browser.actions().dragAndDrop($(jquery.selectors.gragNDropElement), $(jquery.selectors.dropZone)).mouseUp().perform();
    });

    this.When(/^The drop zone become highlight$/, function () {
        expect(browser.wait(EC.textToBePresentInElement($(jquery.selectors.dropZoneAfterDropping), 'Dropped!'), 5000));
        expect($(jquery.selectors.dropZoneAfterDropping).getCssValue("background-color")).to.eventually.equal("rgba(255, 250, 144, 1)");
    });
};