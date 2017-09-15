'use strict';
let helper = require('../../../helpers/helper');
let jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open droppable page$/, () => browser.get('/droppable/#default/'));

    this.When(/^I drag and drop the element$/, () => helper.switchToIframe()
        .then(() => browser.actions()
            .dragAndDrop($(jquery.selectors.gragNDropElement), $(jquery.selectors.dropZone)).mouseUp().perform()));

    this.When(/^The drop zone become highlight$/, () => browser.wait(helper.EC.textToBePresentInElement($(jquery.selectors.dropZoneAfterDropping), 'Dropped!'), 5000)
        .then(() => helper.expect($(jquery.selectors.dropZoneAfterDropping).getCssValue("background-color")).to.eventually.equal("rgba(255, 250, 144, 1)"))
        .then(() => helper.takeScreen())
    );
};