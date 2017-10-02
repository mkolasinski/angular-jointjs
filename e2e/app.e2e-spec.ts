import { JointJSPage } from './app.po';

describe('joint-js App', () => {
  let page: JointJSPage;

  beforeEach(() => {
    page = new JointJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
