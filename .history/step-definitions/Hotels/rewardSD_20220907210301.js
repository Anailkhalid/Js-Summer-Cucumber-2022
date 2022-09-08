const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const homepage = new Homepage();

Given[/^I am on hotels homepage$/, async function() {
     await browser.url('https://www.hotels.com/');

}];

When[/^I click on Learn about Hotels.com Rewards$/, async function() {
    expect(homepage.clickOnRewards(), 'click on rewards is not working').to.be.true;

}];

Then[/^I click on join Now$/, async function() {
     expect(homepage.JoinButton(), 'click on Join in is not working').to.be.true;

}];