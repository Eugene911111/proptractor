'use strict';
var helper = require('../../../helpers/helper');
var jquery = require('../../../pages/Jquery');

module.exports = function () {

    this.When(/^I open page checkboxradio page$/, function () {
        return browser.get('/checkboxradio/');
    });

    this.When(/^Select London radiobutton$/, function () {
        return helper.switchToIframe().then(function () {
            return $(jquery.selectors.londonRadioButton).click();
        })
    });

    this.When(/^I select 4 Star$/, function () {
        return $(jquery.selectors._4StarCheckBox).click();
    });

};