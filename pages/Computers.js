var helper = require('../helpers/helper');
var Computers;

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
        displayingField: '.current a',
        computersNameField: '.computers tbody tr td a'
    };

    this.addNewComputer = (newComputerName) => browser.get('/')
        .then(() => $(self.selectors.addNewComputerButton).click())
        .then(() => $(self.selectors.computerNameField).sendKeys(newComputerName))
        .then(() => $(self.selectors.introducedDateField).sendKeys(self.selectors.introducedDateValue))
        .then(() => $(self.selectors.discontinuedDateField).sendKeys(self.selectors.discontinuedDateValue))
        .then(() => $$(self.selectors.selectAppleInc).click())
        .then(() => $$(self.selectors.createThisComputerButton).click());

    this.addNewComputer = (newComputerName) => {
        return browser.get('/').then(() => {
            return $(self.selectors.addNewComputerButton).click()
        })
            .then(() => {
                return $(self.selectors.computerNameField).sendKeys(newComputerName)
            }).then(() => {
                return $(self.selectors.introducedDateField).sendKeys(self.selectors.introducedDateValue)
            }).then(() => {
                return $(self.selectors.discontinuedDateField).sendKeys(self.selectors.discontinuedDateValue)
            }).then(() => {
                return $$(self.selectors.selectAppleInc).click()
            }).then(() => {
                return $$(self.selectors.createThisComputerButton).click();
            })
    };

    this.checkAlertMessageIsDisplayed = () => helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), 'Done! Computer Apple 747 has been created');

    this.searchComputer = (computerName) => browser.get('/')
        .then(() => $(self.selectors.filterByComputerNameField).sendKeys(computerName))
        .then(() => $(self.selectors.filterByNameButton).click());

    this.checkAfterSearch = () => helper.expect(element(by.linkText(self.selectors.computerName)).getTagName()).toBe('a');

    this.upDateComputerName = (oldName, newName) => browser.get('/')
        .then(() => $(self.selectors.filterByComputerNameField).sendKeys(oldName))
        .then(() => $(self.selectors.filterByNameButton).click())
        .then(() => element(by.linkText(oldName)).getTagName().click())
        .then(() => $(self.selectors.computerNameField).clear())
        .then(() => $(self.selectors.computerNameField).sendKeys(newName))
        .then(() => $$(self.selectors.createThisComputerButton).click());

    this.checkThatNewNameIsSaved = (newName) => helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), newName);

    this.deleteComputeByName = () => browser.get('/')
        .then(() => $(self.selectors.filterByComputerNameField).sendKeys(self.selectors.computerName))
        .then(() => $(self.selectors.filterByNameButton).click())
        .then(() => element(by.linkText(self.selectors.computerName)).getTagName().click())
        .then(() => $$(self.selectors.deleteThisComputerButton).click());

    this.checkComputerHasBeenDeleted = () => helper.waitForTextToBePresentInElement($(self.selectors.alertMessageWarningField), self.selectors.computerHasBeenDeletedMessage);

    this.getListofComps = () => $$('.computers tbody tr').map((items) => {
        return {
            'Computer name': items.$$('td').get(0).getText(),
            'Introduced': items.$$('td').get(1).getText(),
            'Discontinued': items.$$('td').get(2).getText(),
            'Company': items.$$('td').get(3).getText()
        }
    });

    this.checkValueFromList = (comp, colm, value) => this.getListofComps()
        .then((list) => console.log(list.some((item) => (item["Computer name"] === comp && item[colm] === value))));

    this.getTextFromAlertMessage = () => $(self.selectors.alertMessageWarningField).getText();

    this.getTextFromFirstLink = () => $(self.selectors.firstLinkInList).getText();

    this.checkThatComputerWithNameIsInListOfComputers = (computerName) => this.getListofComps()
        .then((list) => list.some((item) => (item["Computer name"] === computerName)));

    this.getThatStaff = () => $$(self.selectors.computersNameField).map((items) => {
        return {
            'items': items.getText()
        }
    });

    this.checkStaff = (compName) => this.getThatStaff()
        .then((list) => list.some((item) => (item.items === compName)));

    this.clicker = () => $(self.selectors.nextButton).click()
        .then(() => self.clicker());


    this.fucFirst = function (stri) {
        let string = stri;
        for (let i = 0; i < string.length; i++) {

            if (string[i] !== ' ') {
                let srt = string[i].toUpperCase() + string.slice(i + 1);
                console.log("Your result is: " + srt);
                break;
            }
            else if (string[i] === ' ') {
            }

        }
    }
};
module.exports = new Computers();