/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Ident } from '../../src';
import { test } from '../template.test';

describe('ident parser', () => {
  it('can be alpha', () => {
    const subject = Ident.Parser.object.run('abcde');
    const expected = JSON.stringify(
      Ident.Structure.object('abcde'),
    );
    test(subject, expected);
  });
});
