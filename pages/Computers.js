var helper = require('../helpers/helper');
var Computers;


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
Computers = function () {
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
        computerAsciName: 'ASCI',
        computerNameRawSelector: '.computers.zebra-striped tbody tr',
        introducedRawSelector: '.computers.zebra-striped tr td:nth-child(2)',
        discontinuedRawSelector: '.computers.zebra-striped tr td:nth-child(3)',
        companyRawSelector: '.computers.zebra-striped tr td:nth-child(4)',
        firstLinkInList: '.computers.zebra-striped tbody tr:first-child td:first-child',
        nextButton: '.next a',
        displayingField: '.current a'
    };

    this.addNewComputer = function (newComputerName) {
        return browser.get('/').then(function () {
            return $(self.selectors.addNewComputerButton).click()
        }).then(function () {
            return $(self.selectors.computerNameField).sendKeys(newComputerName)
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
    this.checkAlertMessageIsDisplayed = function () {
        helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), 'Done! Computer Apple 747 has been created');
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
    this.deleteComputeByName = function () {
        return browser.get('/').then(function () {
            return $(self.selectors.filterByComputerNameField).sendKeys(self.selectors.computerName)
        }).then(function () {
            return $(self.selectors.filterByNameButton).click()
        }).then(function () {
            return element(by.linkText(self.selectors.computerName)).getTagName().click()
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
            return textFromPage.filter(function (x) {
                console.log(x === valueToFind);
                return x === valueToFind;
            });
        });
    };

    this.setRawNameAndValueToFind = function (rawName, valueToFind) {
        if (rawName === 'Computer name') {
            self.arrOfComputers(self.selectors.computerNameRawSelector, valueToFind);
        } else if (rawName === 'Introduced') {
            self.arrOfComputers(self.selectors.introducedRawSelector, valueToFind);
        } else if (rawName === 'Discontinued') {
            self.arrOfComputers(self.selectors.discontinuedRawSelector, valueToFind);
        } else if (rawName === 'Company') {
            self.arrOfComputers(self.selectors.companyRawSelector, valueToFind);
        }
    };

    this.getListofComps = function () {
        return $$('.computers tbody tr').map(function (items) {
            return {
                'Computer name': items.$$('td').get(0).getText(),
                'Introduced': items.$$('td').get(1).getText(),
                'Discontinued': items.$$('td').get(2).getText(),
                'Company': items.$$('td').get(3).getText()
            }
        })
    };

    this.checkValueFromList = function (comp, colm, value) {
        this.getListofComps().then(function (list) {
            console.log(list.some(function (item) {
                return (item["Computer name"] === comp && item[colm] === value);
            }))
        })
    };

    this.getTextFromAlertMessage = function () {
        return $(self.selectors.alertMessageWarningField).getText();
    };

    this.getTextFromFirstLink = function () {
        return $(self.selectors.firstLinkInList).getText();
    };

    this.checkThatComputerWithNameIsInListOfComputers = function (computerName) {
        return this.getListofComps().then(function (list) {
            return list.some(function (item) {
                return (item["Computer name"] === computerName);
            })
        })
    };


    this.getThatStaff = function () {
        return $$('.computers tbody tr td a').map(function (items) {
            return {
                'items': items.getText()
            }
        })
    };

    this.checkStaff = function (compName) {
        return this.getThatStaff().then(function (list) {
            return list.some(function (item) {
                return (item.items === compName);
            })
        })
    };

    this.clicker = function () {
        $(self.selectors.nextButton).click().then(function () {
            self.clicker();
        })
    };

    this.checkNextIsDisabled = function () {
        console.log(" next disabled: " + element(by.css('.next.disabled')).isDisplayed());
    }
};
module.exports = new Computers();