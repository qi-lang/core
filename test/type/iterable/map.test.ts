/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { fail } from 'assert';
import { describe, it } from 'mocha';
import { Iterable } from '../../../src';
import { test } from '../../template.test';

describe('map parser', () => {
  describe('can have within', () => {
    it('empty', () => {
      const subject = Iterable.Map.Parser.object.run('%{}');
      const expected = JSON.stringify(Iterable.Map.Structure.object([]));
      test(subject, expected);
    });

    it('atom', () => {
      fail();
    });

    it('bool', () => {
      fail();
    });

    it('number', () => {
      fail();
    });

    it('string', () => {
      fail();
    });

    it('list', () => {
      fail();
    });

    it('tuple', () => {
      fail();
    });

    it('map', () => {
      fail();
    });
  });
});
