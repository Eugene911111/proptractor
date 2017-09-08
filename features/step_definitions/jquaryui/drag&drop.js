'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open droppable page$/, () => {
        return browser.get('/droppable/#default/');
    });

    this.When(/^I drag and drop the element$/, () => {
        return helper.switchToIframe().then(() => {
            return browser.actions().dragAndDrop($(jquery.selectors.gragNDropElement), $(jquery.selectors.dropZone)).mouseUp().perform();
        })
    });

    this.When(/^The drop zone become highlight$/, () => {
        return browser.wait(helper.EC.textToBePresentInElement($(jquery.selectors.dropZoneAfterDropping), 'Dropped!'), 5000)
            .then(() => {
                return helper.expect($(jquery.selectors.dropZoneAfterDropping).getCssValue("background-color")).to.eventually.equal("rgba(255, 250, 144, 1)")
            }).then(() => {
                return helper.takeScreen();
            })
    });
};