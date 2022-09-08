const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");

Given[/^I am on hotels homepage$/, async function() {
     await browser.url('https://www.hotels.com/');

}];

When[/^I click on Learn about Hotels.com Rewards$/, async function() {
     const homepage = new Homepage();
    expect(homepage.clickOnRewards(), 'click on rewards is not working').to.be.true;

}];

Then[/^I verify hotels rewards opened in a new window$/, async function() {
     const homepage = new Homepage();
    expect(homepage.clickOnRewards(), 'click on rewards is not working').to.be.true;

}];


Then[//, async function() {

}];