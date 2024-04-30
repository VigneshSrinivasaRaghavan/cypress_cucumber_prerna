const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/report/cucumber-json',
	reportPath: 'cypress/report/cucumber-html-report',
	metadata:{
        browser: {
            name: 'chrome',
            version: '118'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: '#0th April Week Regression',
        data: [
            {label: 'Project', value: 'Amazon Echo Project'},
            {label: 'Release', value: '10.1'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});