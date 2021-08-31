/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('demo', () => {
  it('should say hi', () => {
    expect('hello')
      .to
      .be
      .equal('hello');
  });
});
