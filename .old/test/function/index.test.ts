/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Function, Ident } from '../../src';
import { test } from '../template.test';

describe('function parser', () => {
  it('???', () => {
    const subject = Function.Parser.object.run('def test do end');
    const expected = JSON.stringify(
      Function.Structure.object(
        Ident.Structure.object('test'),
        [],
        [],
      ),
    );
    test(subject, expected);
  });
});
