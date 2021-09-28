/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { describe, it } from 'mocha';
import { Atom, Binding, Ident } from '../../src';
import { test } from '../template.test';

describe('binding parser', () => {
  it('can have atom', () => {
    const subject = Binding.Parser.object.run('a = :ok');
    const expected = JSON.stringify(
      Binding.Structure.object(
        Ident.Structure.object('a'),
        Atom.Structure.object('ok'),
      ),
    );
    test(subject, expected);
  });
});
