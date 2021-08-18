// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';
import * as Parsers from './index';
// import * as Types from './type';
import * as Symbols from './symbols';
import * as Structures from '../structure';

const moduleBlockBody = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Module,
      Parsers.Function,
    ]),
  ),
));

const moduleBlock = P.between(
  Parsers.Spacey(Symbols.Do),
)(Parsers.Spacey(Symbols.End))(
  Parsers.Spacey(moduleBlockBody),
);

const Module = P.sequenceOf([
  P.takeRight(Symbols.Module)(Parsers.Spacey1(Parsers.Ident)),
  moduleBlock,
]).map((x) => new Structures.Module(x[0], x[1]));

export default Module;
