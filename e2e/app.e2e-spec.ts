import { DriveUiPage } from './app.po';

describe('drive-ui App', () => {
  let page: DriveUiPage;

  beforeEach(() => {
    page = new DriveUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
