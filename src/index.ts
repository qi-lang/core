/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';

import { Lambda } from './lambda';

const input = 'fn (a, b) -> :hello end';

const res = Lambda.Parser.object.run(input);
consola.log(res.isError ? res.error : res.result);
