/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from './symbols';

import SIdent from '../structure/ident';

const first = P.choice([
  Symbols.Underscore,
  Symbols.Alpha,
]);

const rest = P.many(
  P.choice([
    first,
    Symbols.Number,
  ]),
)
  .map((x) => x.join(''));

const combined = P.sequenceOf([
  first,
  rest,
  P.possibly(P.choice([
    Symbols.Bang,
    Symbols.Question,
  ])),
])
  .map((x) => x.join(''));

const Ident = combined.map(
  (x) => new SIdent(x as string),
);

export default Ident;
