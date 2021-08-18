/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import Kind from '../kind';
import Atom from './atom';

type KeyValue = {
  key: Atom,
  value: any,
}

class Pair {
  public readonly _kind = Kind.Pair;

  // !TODO: change type to something more useful.
  public readonly body: KeyValue;

  constructor(body: KeyValue) {
    this.body = body;
  }
}

export default Pair;
