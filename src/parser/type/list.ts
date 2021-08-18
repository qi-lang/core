// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';
import * as Parsers from '../index';
import Types from './index';

const value = P.recursiveParser(
  () => P.choice([
    // !TODO: Add other complex types such as ident.
    Types.Types,
  ]),
);

const item = P.sepBy(Parsers.Spacey(Symbols.Comma))(Parsers.Spacey(value));

const List = P.sequenceOf([
  Symbols.LeftBrackets,
  item,
  Symbols.RightBrackets,
]).map((x) => new Structures.List(x[1]));

export default List;
