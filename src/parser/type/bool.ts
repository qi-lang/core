// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';
import * as Symbols from '../symbols';
import * as Structures from '../../structure';

const Bool = P.choice([
  Symbols.True,
  Symbols.False,
]).map((result) => new Structures.Bool(result === 'true'));

export default Bool;
