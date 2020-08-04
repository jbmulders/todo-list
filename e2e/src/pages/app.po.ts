import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/login`);
  }

  async setEmailPassword(email: string, password: string): Promise<void> {
    await element(by.css('[data-test-id=email]')).sendKeys(email);
    await element(by.css('[data-test-id=password]')).sendKeys(password);
  }

  async clickLogin() {
    await element(by.css('[data-test-id=loginButton]')).click();
  }
}
