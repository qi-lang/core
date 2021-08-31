/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';

import { Atom } from './type';

const res = Atom.Parser.object.run(':err');
consola.log(res.isError ? res.error : res.result);
