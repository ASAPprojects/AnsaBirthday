import { AnsaBirthdayPage } from './app.po';

describe('ansa-birthday App', () => {
  let page: AnsaBirthdayPage;

  beforeEach(() => {
    page = new AnsaBirthdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
