/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';

import { Iterable } from './type';

const res = Iterable.Tuple.Parser.object.run('{%{a: "Hi, World", b: :c, d: :e}}');
consola.log(res.isError ? res.error : JSON.stringify(res.result));
