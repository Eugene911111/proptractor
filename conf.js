'use strict';

exports.config = {
    directConnect: true,
    baseUrl: 'https://jqueryui.com/',
    // baseUrl: 'http://computer-database.herokuapp.com',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // specs: ['features/updateComputerStep.feature'],
    specs: ['features/jquaryui/tooltipjqueryui.feature'],
    capabilities: {
        browserName: 'chrome',
        // shardTestFiles: true,
        // maxInstances: 3
    },
    cucumberOpts: {
        require: ['features/step_definitions/*.js', 'features/step_definitions/jquaryui/*.js', 'features/reporter.js'],
        format: 'pretty',
        // tags: ['@clickAndDelete', '@addComputer']
    },
    onPrepare: function () {
        // browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },
    reporters: ['progress', 'allure'],
    params: {
        screenshotsBasePath: 'screenshots'
    }
};