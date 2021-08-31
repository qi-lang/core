/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import consola from 'consola';
import PProgram from './parser/program';

const result = PProgram.run(`
def A do

end
`.trim());

if (result.isError) {
  consola.error(result.error);
} else {
  consola.log(result.result);
}
