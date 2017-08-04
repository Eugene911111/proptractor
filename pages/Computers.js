var helper = require('../helpers/helper');
var Computers = function () {
    var self = this;
    this.selectors = {
        addNewComputerButton: '#add',
        computerHasBeenCreatedMessage: 'Done! Computer Apple 747 has been created',
        computerHasBeenDeletedMessage: 'Done! Computer has been deleted',
        computerNameField: '#name',
        computerName: 'Apple 747',
        filterByComputerNameField: '#searchbox',
        filterByNameButton: '#searchsubmit',
        deleteThisComputerButton: '.btn.danger',
        alertMessageWarningField: '.alert-message.warning',
        introducedDateField: '#introduced',
        introducedDateValue: '2007-07-30',
        discontinuedDateField: '#discontinued',
        selectAppleInc: 'option[value="1"]',
        createThisComputerButton: '.btn.primary',
        discontinuedDateValue: '2007-07-30',
        computerNameAfterEdit: 'Apple 747911',
        computerHasBeenUpdatedMessage: 'Done! Computer Apple 747911 has been updated',
        computerAsciName: 'ASCI'
    };

    this.addNewComputer = function () {
        return browser.get('/').then(function () {
            return $(self.selectors.addNewComputerButton).click()
        }).then(function () {
            return $(self.selectors.computerNameField).sendKeys(self.selectors.computerName)
        }).then(function () {
            return $(self.selectors.introducedDateField).sendKeys(self.selectors.introducedDateValue)
        }).then(function () {
            return $(self.selectors.discontinuedDateField).sendKeys(self.selectors.discontinuedDateValue)
        }).then(function () {
            return $$(self.selectors.selectAppleInc).click()
        }).then(function () {
            return $$(self.selectors.createThisComputerButton).click();
        })
    };

    this.checkAlertMessageIsDisplayed = function (message) {
        return helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), message);
    };

    this.searchComputer = function (computerName) {
        return browser.get('/').then(function () {
            return $(self.selectors.filterByComputerNameField).sendKeys(computerName)
        }).then(function () {
            return $(self.selectors.filterByNameButton).click();
        });

    };

    this.checkAfterSearch = function () {
        return expect(element(by.linkText(self.selectors.computerName)).getTagName()).toBe('a');
    };

    this.upDateComputerName = function (oldName, newName) {
        return browser.get('/').then(function () {
            return $(self.selectors.filterByComputerNameField).sendKeys(oldName)
        }).then(function () {
            return $(self.selectors.filterByNameButton).click()
        }).then(function () {
            return element(by.linkText(oldName)).getTagName().click()
        }).then(function () {
            return $(self.selectors.computerNameField).clear()
        }).then(function () {
            return $(self.selectors.computerNameField).sendKeys(newName)
        }).then(function () {
            return $$(self.selectors.createThisComputerButton).click();
        })
    };

    this.checkThatNewNameIsSaved = function (newName) {
        return helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), newName);
    };

    this.deleteComputeByName = function (computerName) {
        return browser.get('/').then(function () {
            return $(self.selectors.filterByComputerNameField).sendKeys(computerName)
        }).then(function () {
            return $(self.selectors.filterByNameButton).click()
        }).then(function () {
            return element(by.linkText(computerName)).getTagName().click()
        }).then(function () {
            return $$(self.selectors.deleteThisComputerButton).click();
        })
    };

    this.checkComputerHasBeenDeleted = function () {
        return helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), self.selectors.computerHasBeenDeletedMessage);
    };

    this.countComputers = function () {
        $$('.computers.zebra-striped tbody tr').count()
            .then(function (countResult) {
                //console.log("Number of computers is: " + countResult);
                return countResult;
            });
    };

    var max = 6;
    let map = new Map();

    this.setMapp = function (a) {
        map.set(a, a);
    };

    this.takeTextPutToMap = function (i, j) {
        for (i = 1; i <= max; i++) {
            var p = $('.computers.zebra-striped tr:nth-child(' + i + ') td:nth-child(' + j + ')');
            p.getText().then(function (text) {
                console.log('text: ' + text);
                self.setMapp(text);
            });
        }
    };

    this.enterTablesRawName = function (tableRawName) {
        if (tableRawName === 'Computer name') {
            self.takeTextPutToMap(1, 1);
        } else if (tableRawName === 'Introduced') {
            self.takeTextPutToMap(1, 2);
        } else if (tableRawName === 'Discontinued') {
            self.takeTextPutToMap(1, 3);
        } else if (tableRawName === 'Company') {
            self.takeTextPutToMap(1, 4);
        }
    };

    this.isThereComputerWithSuchName = function (suchComputer) {
        console.log('has key? ' + map.has(suchComputer));
    };
};

module.exports = new Computers();
