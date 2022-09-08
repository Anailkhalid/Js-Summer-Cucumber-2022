const { Given, Then, When } = require("@wdio/cucumber-framework");

Given[/^I am on hotels homepage$/, async function() {
     await browser.url('https://www.hotels.com/');

}];

When[/^I click on Learn about Hotels.com Rewards$/, async function() {


}];


Then[//, async function() {

}];