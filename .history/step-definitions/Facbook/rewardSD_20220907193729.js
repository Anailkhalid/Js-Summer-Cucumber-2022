const { Given } = require("@wdio/cucumber-framework");

Given[/^I am on hotels homepage$/, async function() {
     await browser.url('https://www.hotels.com/');

}];