import { Before, Given, Then, When } from 'cucumber';

import { LoginPage } from '../pages/app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given('I am on the login page', async () => {
  await browser.get(`${browser.baseUrl}auth/login`);
});

When(
  'I enter {string} and {string} and click login',
  async (email, password) => {
    await page.setEmailPassword(email, password);
    await page.clickLogin();
  },
);

Then('I should be logged in', async () => {
  const EC = protractor.ExpectedConditions;
  browser.wait(EC.urlIs(`${browser.baseUrl}todo`), 5000);
});
