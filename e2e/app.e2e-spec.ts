import { Angular2ExpressPage } from './app.po';

describe('angular2-express App', () => {
  let page: Angular2ExpressPage;

  beforeEach(() => {
    page = new Angular2ExpressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
