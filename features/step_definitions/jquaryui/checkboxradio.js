'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open page checkboxradio page$/, () => {
        return browser.get('/checkboxradio/');
    });

    this.When(/^Select London radiobutton$/, () => {
        return helper.switchToIframe().then(() => {
            return $(jquery.selectors.londonRadioButton).click();
        })
    });

    this.When(/^I select 4 Star$/, () => {
        return $(jquery.selectors._4StarCheckBox).click();
    });

};