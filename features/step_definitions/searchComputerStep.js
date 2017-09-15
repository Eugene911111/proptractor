'use strict';
var computers = require('../../pages/Computers');
var helper = require('../../helpers/helper');

module.exports = function () {

    this.When(/^Search computer by name "([^"]*)"$/, (computerName) => computers.searchComputer(computerName));

    this.Then(/^Check that computer with name "([^"]*)" is displayed$/, (computerName) =>
        helper.expect(computers.getTextFromFirstLink()).to.eventually.equal(computerName));

    this.Then(/^Check that computer with name "([^"]*)" is in list of computers$/, {timeout: 120 * 1000}, (computerName) =>
        helper.expect(computers.checkThatComputerWithNameIsInListOfComputers(computerName)).to.eventually.equal(true));

    this.Then(/^I can verify computers info:$/, (data) => {
        let dataFromTable = data.hashes();
        return computers.getListofComps().then((data) => data["Computer name"] === dataFromTable["Computer name"] &&
            data.Introduced === dataFromTable.Introduced && data.Discontinued === dataFromTable.Discontinued &&
            data.Company === dataFromTable.Company);
    });

    this.Then(/^I clear a search field$/, () => $(computers.selectors.filterByComputerNameField).clear()
        .then(() => $(computers.selectors.filterByNameButton).click())
    );

    this.Then(/^I can go to list of computers from "([^"]*)" point$/, (value) => {
        let numberOfclickingNextButton = +value.split('')[0];
        let t;
        return $(computers.selectors.displayingField).getText().then((text) => {
            t = text.split(" ")[1] + '';
            if (t !== value) {
                for (let i = 0; i < numberOfclickingNextButton; i++) {
                    $(computers.selectors.nextButton).click();
                }
            }
        });
    });

    this.When(/^I open url$/, () => browser.get('/'));

    this.When(/^I click that staff till see comp with name: "([^"]*)"$/, (compNameToSee) => {
        function process(index) {
            $(computers.selectors.displayingField).getText().then((text) => {
                let t = text.split(" ")[5] + '';
                let maxNumberOfIterations = +(t.split('')[0] + t.split('')[1]);
                if (index >= maxNumberOfIterations) {
                }
            });
            computers.checkStaff(compNameToSee).then((text) => {
                if (text === false) {
                    return $(computers.selectors.nextButton).click().then(() => process(index + 1)
                    )
                }
                else if (text === true) {
                }
            });
        }

        process(0);
    });


    this.When(/^I delete that staff till see comp with name: "([^"]*)"$/, (compNameToSee) => {
        function process(index) {
            var t;
            $(computers.selectors.displayingField).getText()
                .then((text) => {
                    t = text.split(" ")[5] + '';
                    return computers.checkStaff(compNameToSee)
                        .then((text) => {
                            if (text === false) {
                                $(computers.selectors.nextButton).click()
                                    .then(() => process(index + 1))
                            }
                            else if (text === true) {
                                element(by.xpath("//tbody/tr/td/a[contains(., '" + compNameToSee + "')]")).click()
                                    .then(() => $(computers.selectors.deleteThisComputerButton).click()
                                        .then(() => process(index + 1)));
                            }
                        });
                });
        }

        process(0);
    });
};



