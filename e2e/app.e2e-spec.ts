import { AngularPerpusPage } from './app.po';

describe('angular-perpus App', () => {
  let page: AngularPerpusPage;

  beforeEach(() => {
    page = new AngularPerpusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
