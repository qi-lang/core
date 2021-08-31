/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Atom } from '../../../src/type';
import { Ident } from '../../../src/ident';

describe('atom parser', () => {
  it('contains Ident', () => {
    const subject = Atom.Parser.object.run(':ok');

    if (!subject.isError) {
      expect(JSON.stringify(subject.result))
        .to
        .be
        .eq(
          JSON.stringify(
            Atom.Structure.object(
              Ident.Structure.object('ok'),
            ),
          ),
        );
    } else {
      throw new Error(subject.error);
    }
  });
});
