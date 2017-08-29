'use strict';

exports.config = {
    directConnect: true,
    baseUrl: 'http://computer-database.herokuapp.com/computers/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        // shardTestFiles: true,
        // maxInstances: 2
    },
    cucumberOpts: {
        require: ['features/step_definitions/*.js', 'features/reporter.js'],
        format: 'pretty',
        // tags: ['@clickAndDelete', '@addComputer']
    },
    onPrepare: function () {
        // browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },
    reporters: ['progress', 'allure'],
};