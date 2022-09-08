const { Given, Then } = require("@wdio/cucumber-framework");

Given[/^I am on darksky homepage$/, async function() {
    await browser.url('https://darksky.net/');

}];

Then[/^I verify timeline has 12-data points with 2 hours gap from current hour$/, async function() {


}];