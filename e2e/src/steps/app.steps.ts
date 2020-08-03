import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I go to the page with path {string}$/, async (path) => {
  await browser.get(`${browser.baseUrl}${path}`);
});

When(/^I do nothing, and not signed in$/, () => {});

Then(/^I should see the login page$/, () => {
  const EC = protractor.ExpectedConditions;
  browser.wait(EC.urlIs(`${browser.baseUrl}/login`), 5000);
});
