const { Given, Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");

Given[/^I am on hotels homepage$/, async function() {
     await browser.url('https://www.hotels.com/');

}];

When[/^I click on Learn about Hotels.com Rewards$/, async function() {
     const homepage = new Homepage();
     

}];


Then[//, async function() {

}];