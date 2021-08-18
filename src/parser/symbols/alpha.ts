// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';

export const UpperAlpha = P.choice([
  P.str('A'),
  P.str('B'),
  P.str('C'),
  P.str('D'),
  P.str('E'),
  P.str('F'),
  P.str('G'),
  P.str('H'),
  P.str('I'),
  P.str('J'),
  P.str('K'),
  P.str('L'),
  P.str('M'),
  P.str('N'),
  P.str('O'),
  P.str('P'),
  P.str('Q'),
  P.str('R'),
  P.str('S'),
  P.str('T'),
  P.str('U'),
  P.str('V'),
  P.str('W'),
  P.str('X'),
  P.str('Y'),
  P.str('Z'),
]);

export const LowerAlpha = P.choice([
  P.str('a'),
  P.str('b'),
  P.str('c'),
  P.str('d'),
  P.str('e'),
  P.str('f'),
  P.str('g'),
  P.str('h'),
  P.str('i'),
  P.str('j'),
  P.str('k'),
  P.str('l'),
  P.str('m'),
  P.str('n'),
  P.str('o'),
  P.str('p'),
  P.str('q'),
  P.str('r'),
  P.str('s'),
  P.str('t'),
  P.str('u'),
  P.str('v'),
  P.str('w'),
  P.str('x'),
  P.str('y'),
  P.str('z'),
]);

export const Alpha = P.choice([
  LowerAlpha,
  UpperAlpha,
]);
