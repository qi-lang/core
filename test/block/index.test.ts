/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Block } from '../../src';
import { test } from '../template.test';

describe('block parser', () => {
  it('can have empty', () => {
    const subject = Block.Parser.object.run('do end');
    const expected = JSON.stringify(
      Block.Structure.object([]),
    );
    test(subject, expected);
  });
});
