// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Kind from '../kind';
import Pair from './pair';

class Map {
  public readonly _kind = Kind.Map;

  public readonly body: Array<Pair>;

  constructor(body: Array<Pair>) {
    this.body = body;
  }
}

export default Map;
