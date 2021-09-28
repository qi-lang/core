/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';
import * as Util from 'util';
import * as Fs from 'fs';
import { Iterable } from '../type';

const input = Fs.readFileSync(
  '/Users/zana/Desktop/core/playground/main.qi', {
    encoding: 'utf-8',
  },
);

// const input = `
// fn (x, y) ->
//   :x
// end
// `.trim();

const res = Iterable.Map.Parser.object.run(input.trim());

consola.log(
  Util.inspect(res.isError ? res.error : res.result, {
    showHidden: false,
    depth: null,
    colors: true,
    breakLength: 2,
  }),
);
