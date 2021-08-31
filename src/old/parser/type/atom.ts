/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as P from 'arcsecond';
import * as Symbols from '../symbols';

import PIdent from '../ident';

import PAtom from '../../structure/type/atom';

const p = P.takeRight(Symbols.Colon)(PIdent);
const Atom = p.map((x: any) => new PAtom(x));

export default Atom;
