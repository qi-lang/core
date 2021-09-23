/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Bool } from '../../../src';
import { test } from '../../template.test';

describe('bool parser', () => {
  it('produces value "true"', () => {
    const subject = Bool.Parser.object.run('true');
    const expected = JSON.stringify(Bool.Structure.object(true));
    test(subject, expected);
  });

  it('produces value "false"', () => {
    const subject = Bool.Parser.object.run('false');
    const expected = JSON.stringify(Bool.Structure.object(false));
    test(subject, expected);
  });
});
