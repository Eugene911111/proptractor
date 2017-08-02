exports.config = {
    directConnect: true,
    baseUrl: 'http://computer-database.herokuapp.com/computers/',
    framework: 'jasmine2',
    specs: ['specs/*Spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    }
};