import { Before, Given, Then, When } from 'cucumber';

import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

Given('I go to page with path {string}', async (path) => {
  await browser.get(`${browser.baseUrl}${path}`);
});

When('I do nothing, and not signed in', () => {});

Then('I should see the login page', async () => {
  const EC = protractor.ExpectedConditions;
  browser.wait(EC.urlIs(`${browser.baseUrl}auth/login`), 5000);
});
