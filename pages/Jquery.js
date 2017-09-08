let helper = require('../helpers/helper');

let Jquery = function () {
    let self = this;

    this.selectors = {
        fieldWithSection4Text: '#ui-id-8 p:nth-child(1)',
        fieldWithSection1: '#ui-id-1',
        section4Button: '#ui-id-7',
        fieldWithSection1Text: '#ui-id-2 p:nth-child(1)',
        nextButtonOnDatePicker: '.ui-datepicker-next.ui-corner-all',
        dropZoneAfterDropping: '.ui-widget-header.ui-droppable.ui-state-highlight',
        dropZone: '.ui-widget-header.ui-droppable',
        gragNDropElement: '.ui-widget-content.ui-draggable.ui-draggable-handle',
        datePickerField: '.hasDatepicker',
        tooltip: '.ui-tooltip-content',
        iframe: '.demo-frame',
        tooltipsLink: 'body p:nth-child(1) a',
        londonRadioButton: 'label[for="radio-3"]',
        _4StarCheckBox: 'label[for="checkbox-3"]',
        elementToScroll: '.view-source'
    };

    this.getTextFromSection4 = function () {
        return $(self.selectors.fieldWithSection4Text).getText();
    };

    this.checkThatSection4IsOpened = function () {
        return helper.waitForTextToBePresentInElement($(self.selectors.fieldWithSection4Text), '');
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