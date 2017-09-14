'use strict';
let helper = require('../../../helpers/helper');
let jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open page checkboxradio page$/, () => browser.get('/checkboxradio/'));

    this.When(/^Select London radiobutton$/, () => helper.switchToIframe()
        .then(() => $(jquery.selectors.londonRadioButton).click())
    );

    this.When(/^I select 4 Star$/, () => $(jquery.selectors._4StarCheckBox).click());
};