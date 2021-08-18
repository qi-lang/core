/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { expect } from 'chai';
import { describe, it } from 'mocha';

import PBinding from '../../src/parser/binding';

import SBinding from '../../src/structure/binding';
import SIdent from '../../src/structure/ident';
import SNumber from '../../src/structure/type/number';

import Kind from '../../src/structure/kind';

describe('binding', () => {
  it('is binding kind', () => {
    const parse = PBinding.run('a = ""');
    const result = parse.isError ? parse.error : parse.result;

    expect((result as SBinding)._kind)
      .to
      .equal(
        Kind.Binding,
      );
  });

  it('is example', () => {
    const parse = PBinding.run('a = 2');
    const result = parse.isError ? parse.error : parse.result;

    expect(JSON.stringify(result))
      .to
      .equals(
        JSON.stringify(new SBinding(new SIdent('a'), new SNumber(2))),
      );
  });
});
