import { browser, by, element } from 'protractor';

export class AppPage {
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<
      string
    >;
  }
}
