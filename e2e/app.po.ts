export class DropboxviewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dropboxview-app h1')).getText();
  }
}
