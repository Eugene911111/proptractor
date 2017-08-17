var reporter = require('cucumberjs-allure-reporter');
reporter.config(
    {
        targetDir:'./allure-results1/'
    }
);
module.exports = reporter;