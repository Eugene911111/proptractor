'use strict';
var jquery = require('../../../pages/Jquery');
var helper = require('../../../helpers/helper');
module.exports = function () {

    this.When(/^I open datepicker page$/, () => browser.get('/datepicker/'));

    this.When(/^I open datepicker$/, () => helper.switchToIframe()
        .then(() => $(jquery.selectors.datePickerField).click()));

    this.When(/^I select date "([^"]*)" "([^"]*)" "([^"]*)"$/, (month, year, day) => {
        function selectDate(index) {
            if (index >= 100) {
                return;
            }
            jquery.checkDate(month, year).then((result) => {
                if (result == false) {
                    return $(jquery.selectors.nextButtonOnDatePicker).click()
                        .then(() => selectDate(index + 1))
                } else if (result == true) {
                    return element(by.xpath('//tbody//a[contains(., ' + day + ')]')).click();
                }
            });
        }

        selectDate(0);
    });

};