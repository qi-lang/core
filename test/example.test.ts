// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { expect } from 'chai';

import { describe, it } from 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = 'Hello, World!';
    expect(result)
      .to
      .equal('Hello, World!');
  });
});
