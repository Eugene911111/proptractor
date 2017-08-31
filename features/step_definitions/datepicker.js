'use strict';
var helper = require('../../helpers/helper');
var jquery = require('../../pages/Jquery');
var EC = protractor.ExpectedConditions;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
module.exports = function () {

    this.When(/^I open datepicker page$/, function () {
        browser.get('/datepicker/');
    });

    this.When(/^I open datepicker$/, function () {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);
        $('.hasDatepicker').click();
    });

    this.When(/^I select date "([^"]*)" "([^"]*)" "([^"]*)"$/, function (month, year, day, callback) {
        (function process(index) {
            if (index >= 50) {
                return;
            }
            jquery.checkDate(month, year).then(function (result) {
                if (result == false) {
                    $(jquery.selectors.nextButtonOnDatePicker).click();
                    process(index + 1);
                } else if (result == true) {
                    element(by.xpath('//tbody//a[contains(., ' + day + ')]')).click();
                    browser.sleep(1000);
                }
            });
            callback();
        })(0);
    });

};