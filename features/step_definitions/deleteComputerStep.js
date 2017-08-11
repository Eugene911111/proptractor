'use strict';
var computers = require('../../pages/Computers');

module.exports = function () {

    this.When(/^Delete computer with name "([^"]*)"$/, function (computerName, callback) {
        computers.deleteComputeByName(computerName);
        callback();
    });
};
