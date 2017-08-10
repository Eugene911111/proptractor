exports.config = {
    directConnect: true,
    baseUrl: 'http://computer-database.herokuapp.com/computers/',
    framework: 'jasmine2',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: 'features/step_definitions/*.js'
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    }
};