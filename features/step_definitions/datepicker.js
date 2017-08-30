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

    this.When(/^Select date$/, function () {
        var driver = browser.driver;
        var loc = (by.tagName('iframe'));
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);
        $('.hasDatepicker').click();
    });

    this.When(/^I check$/, function (callback) {
        (function process(index) {
            if (index >= 15) {
                return;
            }

            jquery.checkDate('August', '2018').then(function (result) {
                if (result == false) {
                    $('.ui-datepicker-next.ui-corner-all').click();
                    process(index + 1);
                } else if (result == true) {
                }
            });
            callback();
        })(0);
    });

};