const { Given, When } = require("@wdio/cucumber-framework");

Given[/^I am on darksky homepage$/, async function() {
    await browser.url('https://darksky.net/');

}];

When[/^I scroll to Today's timeline$/, async function() {

}];