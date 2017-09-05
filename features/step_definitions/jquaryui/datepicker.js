'use strict';
var jquery = require('../../../pages/Jquery');
var helper = require('../../../helpers/helper');

module.exports = function () {

    this.When(/^I open datepicker page$/, function () {
        return browser.get('/datepicker/');
    });

    this.When(/^I open datepicker$/, function () {
        return helper.switchToIframe().then(function () {
            return $(jquery.selectors.datePickerField).click();
        })
    });

    this.When(/^I select date "([^"]*)" "([^"]*)" "([^"]*)"$/, function (month, year, day) {
        var index = 0;

        function selectDate(index) {
            if (index >= 100) {
                return;
            }
            jquery.checkDate(month, year).then(function (result) {
                if (result == false) {
                    return $(jquery.selectors.nextButtonOnDatePicker).click().then(function () {
                        return selectDate(index + 1);
                    })
                } else if (result == true) {
                    return element(by.xpath('//tbody//a[contains(., ' + day + ')]')).click();
                }
            });
        }

        selectDate(index);
    });

};