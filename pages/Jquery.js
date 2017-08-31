var helper = require('../helpers/helper');
var Jquery;
Jquery = function () {
    var self = this;

    this.selectors = {
        fieldWithSection4Text: '#ui-id-8 p:nth-child(1)',
        fieldWithSection1: '#ui-id-1',
        section4Button: '#ui-id-7',
        fieldWithSection1Text: '#ui-id-2 p:nth-child(1)',
        nextButtonOnDatePicker: '.ui-datepicker-next.ui-corner-all'
    };

    this.getTextFromSection4 = function () {
        return $(self.selectors.fieldWithSection4Text).getText();
    };

    this.checkThatSection4IsOpened = function () {
        return helper.waitForTextToBePresentInElement($(self.selectors.fieldWithSection4Text), '');
    };

    this.checkThatSection1IsOpened = function () {
        return helper.waitForTextToBePresentInElement($(self.selectors.fieldWithSection1Text), 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.');
    };

    this.getMonthAndYearFromDatepicker = function () {
        return $$('.ui-datepicker-title').map(function (date) {
            return {
                'month': date.$('.ui-datepicker-month').getText(),
                'year': date.$('.ui-datepicker-year').getText()
            }
        })
    };

    this.checkDate = function (month, year) {
        return this.getMonthAndYearFromDatepicker().then(function (list) {
            return (list.some(function (date) {
                return (date.month === month && date.year === year);
            }))
        })
    };

};
module.exports = new Jquery();