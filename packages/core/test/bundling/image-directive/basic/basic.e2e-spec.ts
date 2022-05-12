/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {browser, by, element} from 'protractor';

import {verifyNoBrowserErrors} from '../../../../../examples/test-utils';

describe('NgOptimizedImage directive', () => {
  afterEach(verifyNoBrowserErrors);

  it('should render an image with an updated `src`', async () => {
    await browser.get('/');
    const imgs = element.all(by.css('img'));
    const src = await imgs.get(0).getAttribute('src');
    expect(src.endsWith('b.png')).toBe(true);
  });
});
