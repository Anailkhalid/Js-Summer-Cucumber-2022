const { Given, Then } = require("@wdio/cucumber-framework");

Given[/^I am on darksky homepage$/, async function() {
    await browser.url('https://darksky.net/');

}];

Then[/^/, async function() {


}];