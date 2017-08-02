var helper = require('../helpers/helper');
browser.ignoreSynchronization = true;
var Computers = function () {
    var self = this;
    this.addNewComputerButton = function () {
        return $('#add');
    };

    this.computerNameField = function () {
        return $('#name');
    };

    this.computersPageContent = function () {
        return $('#main');
    };

    this.introducedDateField = function () {
        return $('#introduced');
    };

    this.discontinuedDateField = function () {
        return $('#discontinued');
    };

    this.selectAppleInc = function () {
        return $$('option[value="1"]');
    };

    this.createThisComputerButton = function () {
        return $$('.btn.primary');
    };

    this.alertMessageWarningField = function () {
        return $('.alert-message.warning');
    };

    this.computerHasBeenCreatedMessage = function () {
        return 'Done! Computer Apple 747 has been created';
    };

    this.computerHasBeenDeletedMessage = function () {
        return 'Done! Computer has been deleted';
    };

    this.computerHasBeenUpdatedMessage = function () {
        return 'Done! Computer Apple 747911 has been updated';
    };

    this.computerName = function () {
        return 'Apple 747';
    };

    this.computerNameAfterEdit = function () {
        return 'Apple 747911';
    };

    this.filterByComputerNameField = function () {
        return $('#searchbox');
    };

    this.filterByNameButton = function () {
        return $('#searchsubmit');
    };

    this.deleteThisComputerButton = function () {
        return $$('.btn.danger');
    };

    this.introducedDateValue = function () {
        return '2007-07-30';
    };

    this.discontinuedDateValue = function () {
        return '2007-07-30';
    };

    this.addNewComputer = function () {
        browser.get('/');
        this.addNewComputerButton().click()
            .then(function () {
                return self.computerNameField().sendKeys(self.computerName())
                    .then(function () {
                        return self.introducedDateField().sendKeys(self.introducedDateValue())
                            .then(function () {
                                return self.discontinuedDateField().sendKeys(self.discontinuedDateValue())
                                    .then(function () {
                                        return self.selectAppleInc().click()
                                            .then(function () {
                                                return self.createThisComputerButton().click();
                                            })
                                    })
                            })
                    })
            })
    };

    this.checkAlertMessageIsDisplayed = function (message) {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField(), message);
    };
    this.returnTrue = function () {
        return false;
    };

    this.searchComputer = function (computerName) {
        browser.get('/');
        self.filterByComputerNameField().sendKeys(computerName)
            .then(function () {
                return self.filterByNameButton().click();
            });
    };

    this.checkAfterSearch = function () {
        return expect(element(by.linkText(self.computerName())).getTagName()).toBe('a');
    };

    this.upDateComputerName = function (oldName, newName) {
        browser.get('/');
        self.filterByComputerNameField().sendKeys(oldName)
            .then(function () {
                return self.filterByNameButton().click()
                    .then(function () {
                        return expect(element(by.linkText(oldName)).getTagName()).toBe('a')
                            .then(function () {
                                return element(by.linkText(oldName)).getTagName().click()
                                    .then(function () {
                                        return self.computerNameField().clear()
                                            .then(function () {
                                                return self.computerNameField().sendKeys(newName)
                                                    .then(function () {
                                                        return self.createThisComputerButton().click();
                                                    })
                                            })
                                    })
                            })
                    })
            })
    };

    this.checkThatNewNameIsSaved = function (newName) {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField(), newName);
    };

    this.deleteComputeByName = function (computerName) {
        browser.get('/');
        self.filterByComputerNameField().sendKeys(computerName)
            .then(function () {
                return self.filterByNameButton().click()
                    .then(function () {
                        return expect(element(by.linkText(computerName)).getTagName()).toBe('a')
                            .then(function () {
                                return element(by.linkText(computerName)).getTagName().click()
                                    .then(function () {
                                        return self.deleteThisComputerButton().click();
                                    })
                            })
                    })
            })
    };

    this.checkComputerHasBeenDeleted = function () {
        return helper.waitForTextToBePresentInElement(self.alertMessageWarningField(), self.computerHasBeenDeletedMessage());
    }
};

module.exports = new Computers();
