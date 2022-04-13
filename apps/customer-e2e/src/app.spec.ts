import { device, element, by, expect } from 'detox';

describe('Customer', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText('Welcome Customer 👋');
  });
  it('shoud display RNText', async() => {
    await expect(element(by.id('share-component-text'))).toHaveText('Share componnent text');
  })
});
