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
