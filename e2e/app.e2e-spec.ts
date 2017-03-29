import { CrowdpouchPage } from './app.po';

describe('crowdpouch App', () => {
  let page: CrowdpouchPage;

  beforeEach(() => {
    page = new CrowdpouchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
