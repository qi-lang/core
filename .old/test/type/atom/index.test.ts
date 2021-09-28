/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Atom } from '../../../src/type';
import { test } from '../../template.test';

describe('atom parser', () => {
  it('is complete', () => {
    const subject = Atom.Parser.object.run(':ok');
    const expected = JSON.stringify(Atom.Structure.object('ok'));
    test(subject, expected);
  });
});
