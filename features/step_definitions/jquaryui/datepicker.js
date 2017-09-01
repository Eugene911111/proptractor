'use strict';
var jquery = require('../../../pages/Jquery');
var helper = require('../../../helpers/helper');
module.exports = function () {

    this.When(/^I open datepicker page$/, function () {
        browser.get('/datepicker/');
    });

    this.When(/^I open datepicker$/, function () {
        helper.switchToIframe();
        $(jquery.selectors.datePickerField).click();
    });

    this.When(/^I select date "([^"]*)" "([^"]*)" "([^"]*)"$/, function (month, year, day, callback) {
        (function process(index) {
            if (index >= 100) {
                return;
            }
            jquery.checkDate(month, year).then(function (result) {
                if (result == false) {
                    $(jquery.selectors.nextButtonOnDatePicker).click();
                    process(index + 1);
                } else if (result == true) {
                    element(by.xpath('//tbody//a[contains(., ' + day + ')]')).click();
                }
            });
            callback();
        })(0);
    });

};