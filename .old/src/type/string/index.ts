/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import * as Arc from 'arcsecond';

export namespace String {

  export namespace Parser {

    // TODO: Temporary?
    export const object = Arc.regex(
      // eslint-disable-next-line max-len
      /^("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/,
    );
  }

  export namespace Structure {
  }
}
