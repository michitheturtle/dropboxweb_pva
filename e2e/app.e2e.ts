import { DropboxviewPage } from './app.po';

describe('dropboxview App', function() {
  let page: DropboxviewPage;

  beforeEach(() => {
    page = new DropboxviewPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dropboxview works!');
  });
});
