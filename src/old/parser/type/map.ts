/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';

import Spacey from '../helper/spacey';

import PTypes from './index';
import PIdent from '../ident';

import SMap from '../../structure/type/map';
import SAtom from '../../structure/type/atom';
import SPair from '../../structure/type/pair';

const body = P.recursiveParser(
  () => P.choice([
    // !TODO: Add other complex types such as ident.
    PTypes.Any,
  ]),
);

const mapAtom = P.sequenceOf([
  P.choice([
    PIdent,
    // !TODO: Add String parser.
    // Parsers.String,
  ]),
  Symbols.Colon,
])
  .map((x) => new SAtom(x[0]));

const pair = P.sequenceOf([
  Spacey(mapAtom),
  Spacey(body),
])
  .map((x) => new SPair({
    key: x[0],
    value: x[1],
  }));

const items = P.sepBy(Spacey(Symbols.Comma))(Spacey(pair));

const Map = P.takeLeft(
  P.takeRight(
    P.sequenceOf([
      Symbols.Percent,
      Symbols.LeftBrace,
    ]),
  )(items),
)(Symbols.RightBrace)
  .map((x: any) => new SMap(x));

export default Map;
