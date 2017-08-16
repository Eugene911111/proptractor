'use strict';

exports.config = {
    directConnect: true,
    baseUrl: 'http://computer-database.herokuapp.com/computers/',
    framework: 'custom',
    defaultTimeoutInterval: 25000,
    allScriptsTimeout: 20000,
    getPageTimeout: 50000,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/clickForSomeElementIsShown.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        format: 'pretty'
    },
    onPrepare: function () {
        // browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },
    reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    }
};