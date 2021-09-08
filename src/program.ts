/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';
import { Module } from './module';
import { Helper } from './helper';

export namespace Program {

  export namespace Parser {
    export const object = Helper.Spacing.between(
      Arc.many(
        Helper.Spacing.between(
          Module.Parser.object,
        ),
      ),
    );

  }

  export namespace Structure {

  }
}
