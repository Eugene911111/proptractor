'use strict';
var computers = require('../../pages/Computers');

module.exports = function () {

    this.When(/^Update computer "([^"]*)" name with new name "([^"]*)"$/, (oldComputerName, newComputerName, callback) => {
        computers.upDateComputerName(oldComputerName, newComputerName);
        callback();
    });
};