/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';
import * as Util from 'util';
import { Iterable } from './type';

const input = `
%{a: true}
`.trim();

const res = Iterable.Map.Parser.object.run(input);
consola.log(
  Util.inspect(res.isError ? res.error : res.result, {
    showHidden: false,
    depth: null,
    colors: true,
    breakLength: 2,
  }),
);
