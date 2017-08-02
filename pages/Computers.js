var helper = require('../helpers/helper');
var Computers = function () {
    var self = this;

    this.addNewComputerButton = $('#add');

    this.computerNameField = $('#name');

    this.computersPageContent = $('#main');

    this.introducedDateField = $('#introduced');

    this.discontinuedDateField = $('#discontinued');

    this.selectAppleInc = $$('option[value="1"]');

    this.createThisComputerButton = $$('.btn.primary');

    this.alertMessageWarningField = $('.alert-message.warning');

    this.computerHasBeenCreatedMessage = 'Done! Computer Apple 747 has been created';

    this.computerHasBeenDeletedMessage = 'Done! Computer has been deleted';

    this.computerHasBeenUpdatedMessage = 'Done! Computer Apple 747911 has been updated';

    this.computerName = 'Apple 747';

    this.computerNameAfterEdit = 'Apple 747911';

    this.filterByComputerNameField = $('#searchbox');

    this.filterByNameButton = $('#searchsubmit');

    this.deleteThisComputerButton = $$('.btn.danger');

    this.introducedDateValue = '2007-07-30';

    this.discontinuedDateValue = '2007-07-30';

    this.addNewComputer = function () {
        return browser.get('/').then(function () {
            return self.addNewComputerButton.click()
        }).then(function () {
            return self.computerNameField.sendKeys(self.computerName)
        }).then(function () {
            return self.introducedDateField.sendKeys(self.introducedDateValue)
        }).then(function () {
            return self.discontinuedDateField.sendKeys(self.discontinuedDateValue)
        }).then(function () {
            return self.selectAppleInc.click()
        }).then(function () {
            return self.createThisComputerButton.click();
        })
    };

    this.checkAlertMessageIsDisplayed = function (message) {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField, message);
    };

    this.searchComputer = function (computerName) {
        return browser.get('/').then(function () {
            return self.filterByComputerNameField.sendKeys(computerName)
        }).then(function () {
            return self.filterByNameButton.click();
        });
    };

    this.checkAfterSearch = function () {
        return expect(element(by.linkText(self.computerName)).getTagName()).toBe('a');
    };

    this.upDateComputerName = function (oldName, newName) {
        return browser.get('/').then(function () {
            return self.filterByComputerNameField.sendKeys(oldName)
        }).then(function () {
            return self.filterByNameButton.click()
        }).then(function () {
            return element(by.linkText(oldName)).getTagName().click()
        }).then(function () {
            return self.computerNameField.clear()
        }).then(function () {
            return self.computerNameField.sendKeys(newName)
        }).then(function () {
            return self.createThisComputerButton.click();
        })
    };

    this.checkThatNewNameIsSaved = function (newName) {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField, newName);
    };

    this.deleteComputeByName = function (computerName) {
        return browser.get('/').then(function () {
            return self.filterByComputerNameField.sendKeys(computerName)
        }).then(function () {
            return self.filterByNameButton.click()
        }).then(function () {
            return element(by.linkText(computerName)).getTagName().click()
        }).then(function () {
            return self.deleteThisComputerButton.click();
        })
    };

    this.checkComputerHasBeenDeleted = function () {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField, self.computerHasBeenDeletedMessage);
    }
};

module.exports = new Computers();
