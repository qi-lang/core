/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Parsers from './index';
import * as Symbols from './symbols';
// import * as Structures from '../structure';
import Types from './type';

const body = P.recursiveParser(() => P.many(
  Parsers.Spacey(
    P.choice([
      Parsers.Binding,
      Types.Types,
    ]),
  ),
));

const Block = P.between(
  Parsers.Spacey(Symbols.Do),
)(Parsers.Spacey(Symbols.End))(
  Parsers.Spacey(body),
);

export default Block;
