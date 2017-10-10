import { UserPage } from './app.po';

describe('user App', () => {
  let page: UserPage;

  beforeEach(() => {
    page = new UserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
