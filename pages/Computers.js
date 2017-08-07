var helper = require('../helpers/helper');
var Computers = function () {
    var self = this;
    var result;

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
        computerAsciName: 'ASCI',
        computerNameRawSelector: '.computers.zebra-striped tr td:nth-child(1)',
        introducedRawSelector: '.computers.zebra-striped tr td:nth-child(2)',
        discontinuedRawSelector: '.computers.zebra-striped tr td:nth-child(3)',
        companyRawSelector: '.computers.zebra-striped tr td:nth-child(4)'
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
        return $$('.computers.zebra-striped tbody tr').count()
            .then(function (countResult) {
                //console.log("Number of computers is: " + countResult);
                g = countResult;
                return g;
            });
    };

    this.arrOfComputers = function (rawSelector, valueToFind) {
        return $$(rawSelector).getText().then(function (textFromPage) {
            return textFromPage.map(function (x) {
                result = (x === valueToFind);
                if (result === true) {
                    console.log(result);
                }
                return result;
            })
        });
    };

    this.setRawNameAndValueToFind = function (rawName, valueToFind) {
        if (rawName === 'Computer name') {
            self.arrOfComputers(self.selectors.computerNameRawSelector, valueToFind);
        } else if (rawName === 'Introduced') {
            self.arrOfComputers(self.selectors.introducedRawSelector, valueToFind);
        } else if (rawName === 'Discontinued') {
            self.arrOfComputers(self.discontinuedRawSelector, valueToFind);
        } else if (rawName === 'Company') {
            self.arrOfComputers(self.selectors.companyRawSelector, valueToFind);
        }
    }
};

module.exports = new Computers();
